<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutNav from './components/LayoutNav.vue'
</script>
<template>
    <div>
        <LayoutNav />
        <LayoutHeader />
        <router-view />
        <LayoutFooter />
    </div>
</template>
