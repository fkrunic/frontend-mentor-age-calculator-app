<script setup lang="ts">
import { Display } from '../content';
defineProps<{
  title: string, 
  amount: Display
}>()
</script>

<template>
  <div class="
    flex 
    flex-row 
    gap-2

    text-6xl
    italic    
    font-bold

    desktop:gap-4
    desktop:-mt-10
    desktop:text-[80pt]
    ">
    <p class="text-purple">{{ amount }}</p>
    <p class="">{{ title }}</p>
  </div>    
</template>