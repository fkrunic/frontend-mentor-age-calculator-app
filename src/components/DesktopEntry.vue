<script setup lang="ts">
defineProps<{
  title: string, 
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="text-sm tracking-[0.2rem] text-smokey-gray/80">{{ title }}</p>
    <input 
      class="
        w-40
        p-4

        text-3xl
        outline-none  
        
        rounded-lg
        border-solid 
        border-[1px] 
        border-light-gray
        "
      type="text" 
      :placeholder="placeholder">
  </div>
</template>