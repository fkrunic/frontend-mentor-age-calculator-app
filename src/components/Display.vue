<script setup lang="ts">
import { Display } from '../app';
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

    text-[40pt]
    leading-[45pt]
    italic    
    font-bold

    desktop:gap-4
    desktop:-mt-10
    desktop:text-[80pt]
    desktop:leading-[80pt]
    ">
    <p class="text-purple">{{ amount }}</p>
    <p class="">{{ title }}</p>
  </div>    
</template>