<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/Mobile.vue'
import Desktop from './components/Desktop.vue'

onMounted(() => {
  document.body.className = 'font-poppins bg-off-white'
})
</script>

<template>
  <Mobile class="desktop:hidden"></Mobile>
  <Desktop class="hidden desktop:flex"></Desktop>
</template>