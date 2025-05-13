<script setup>
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'


//props适配图片列表
const props = defineProps({
    imageList: {
        type: Array,
        default: () => []
    }
})

// 1.小图切换大图显示
const activeIndex = ref(0)

const enterhandler = (i) => {
    if (i >= 0 && i < props.imageList.length) { // 检查索引是否合法
        activeIndex.value = i
    } else {
        console.error('Invalid image index:', i)
    }
}

// 2. 获取鼠标相对位置
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)

// 3. 控制滑块跟随鼠标移动（监听elementX/Y变化，一旦变化 重新设置left/top）
const left = ref(0)
const top = ref(0)

const positionX = ref(0)
const positionY = ref(0)
watch([elementX, elementY, isOutside], () => {
    if (isOutside.value) return

    // 有效范围内控制滑块距离
    left.value = Math.max(0, Math.min(elementX.value - 100, 200))
    top.value = Math.max(0, Math.min(elementY.value - 100, 200))

    // 控制大图的显示
    positionX.value = -left.value * 2
    positionY.value = -top.value * 2
})
</script>

<template>
    <div class="goods-image">
        <!-- 左侧大图-->
        <div class="middle" ref="target">
            <img :src="imageList[activeIndex]" alt="" />
            <!-- 蒙层小滑块 -->
            <div class="layer" :style="{ left: `${left}px`, top: `${top}px` }"></div>
        </div>
        <!-- 小图列表 -->
        <ul class="small">
            <li v-for="(img, i) in imageList" :key="i" @mouseenter="enterhandler(i)"
                :class="{ active: i === activeIndex }">
                <img :src="img" alt="" />
            </li>
        </ul>
        <!-- 放大镜大图 -->
        <div class="large" :style="[
            {
                backgroundImage: `url(${imageList[activeIndex]})`,
                backgroundPositionX: `${positionX}px`,
                backgroundPositionY: `${positionY}px`,
            },
        ]" v-show="!isOutside"></div>
    </div>
</template>

<style scoped lang="scss">
.goods-image {
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;

    .middle {
        width: 400px;
        height: 400px;
        background: #f5f5f5;
        position: relative;
    }

    .large {
        position: absolute;
        top: 0;
        left: 412px;
        width: 400px;
        height: 400px;
        z-index: 500;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-repeat: no-repeat;
        background-size: 800px 800px;
        background-color: #f8f8f8;
    }

    .layer {
        width: 200px;
        height: 200px;
        background: rgba(0, 0, 0, 0.2);
        position: absolute;
        cursor: move;
    }

    .small {
        width: 80px;

        li {
            width: 68px;
            height: 68px;
            margin-left: 12px;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover,
            &.active {
                border: 2px solid $xtxColor;
            }
        }
    }
}
</style>
