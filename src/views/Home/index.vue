<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
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
            <HomeProduct />
            <HomePanel :title="title" :subtitle="subtitle">
                <div>
                    home panel content
                </div>
            </HomePanel>
            <HomePanel :title="title" :subtitle="subtitle">
                <div>
                    home panel content
                </div>
            </HomePanel>
        </div>
    </div>
</template>