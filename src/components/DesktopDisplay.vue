<script setup lang="ts">
import { Display } from '../content';
defineProps<{
  title: string, 
  amount: Display
}>()
</script>

<template>
  <div class="flex flex-row gap-4 -mt-10 text-[80pt] italic font-bold">
    <p class="text-purple">{{ amount }}</p>
    <p>{{ title }}</p>
  </div>  
</template>