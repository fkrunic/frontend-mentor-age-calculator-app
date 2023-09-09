<script setup lang="ts">
import { onMounted } from 'vue';
import Mobile from './components/Mobile.vue'

onMounted(() => {
  document.body.className = 'font-poppins bg-off-white'
})
</script>

<template>
  <Mobile></Mobile>
</template>