<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFixed from './components/LayoutFixed.vue'

// 触发获取导航列表的action
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore() // 使用 categoryStore 来获取分类数据

onMounted(() => {
    console.log('hello');
    categoryStore.getCategory() // 获取分类数据
})

</script>
<template>
    <div>
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <router-view />
        <LayoutFooter />
    </div>
</template>
