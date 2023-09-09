<script setup lang="ts">
import { Display } from '../content';
defineProps<{
  title: string,
  amount: Display
}>()
</script>

<template>
  <div class="flex flex-row gap-2">
    <p class="text-6xl italic text-purple font-bold">{{ amount }}</p>
    <p class="text-6xl italic font-bold">{{ title }}</p>
  </div>  
</template>