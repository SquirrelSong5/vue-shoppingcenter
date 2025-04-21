<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutFixed from './components/LayoutFixed.vue'  
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
