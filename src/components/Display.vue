<script setup lang="ts">
defineProps<{
  title: string,
  amount: number
}>()
</script>

<template>
  <div class="flex flex-row gap-2">
    <p class="text-5xl italic text-purple font-bold">{{ amount }}</p>
    <p class="text-5xl italic font-bold">{{ title }}</p>
  </div>
</template>