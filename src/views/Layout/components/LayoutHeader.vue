<script setup>
import { getCategoryAPI } from '@/apis/layout';
import { onMounted, ref } from 'vue'

const categoryList = ref([]) // 定义一个响应式变量 categoryList 用于存储分类列表

const getCategory = async () => { // 定义一个异步函数 getCategory 用于获取分类数据
  try {
    const res = await getCategoryAPI(); // 调用 API 获取分类数据
    if (res && res.data.result) {
      categoryList.value = res.data.result; // 如果 API 返回的数据格式正确，则将结果赋值给 categoryList
    } else {
      console.error('API 返回的数据格式不正确', res); // 如果 API 返回的数据格式不正确，则输出错误信息
    }
  } catch (error) {
    console.error('获取分类数据失败', error); // 捕获并输出获取分类数据过程中发生的错误
  }
};
onMounted(() => getCategory())

</script>

<template>
  <!-- 应用头部组件 -->
  <header class='app-header'>
    <div class="container">
      <!-- 应用logo，点击后跳转到首页 -->
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
      <!-- 导航栏，当分类列表存在时显示 -->
      <ul class="app-header-nav" v-if="categoryList.length">
        <!-- 分类列表项，使用v-for循环渲染 -->
        <li class="home" v-for="item in categoryList" :key="item.id">
          <RouterLink :to="`/category/${item.id}`">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <!-- 导航栏加载提示，当分类列表不存在时显示 -->
      <ul class="app-header-nav" v-else>
        <li class="home">加载中...</li>
      </ul>
      <!-- 搜索框区域 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->

    </div>
  </header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    width: 820px;
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;

    li {
      margin-right: 40px;
      width: 38px;
      text-align: center;

      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        display: inline-block;

        &:hover {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }

      .active {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }
  }

  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>