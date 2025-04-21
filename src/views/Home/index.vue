<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
</script>
<template>
    <div>
        <div class="container">
            <HomeCategory />
            <HomeBanner />
        </div>
        <div>
            <HomeNew />
            <HomeHot />
            <homeProduct />
        </div>
    </div>
</template>