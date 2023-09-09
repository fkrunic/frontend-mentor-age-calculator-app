<script setup lang="ts">
defineProps<{
  title: string, 
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <p class="text-xs tracking-[3px] text-smokey-gray">{{ title }}</p>
    <input 
      class="
        w-[5.5rem] 
        p-3 
        
        rounded-lg 
        outline-none 
        border-solid 
        border-[1px] 
        
        border-light-gray
        text-lg
        " 
      type="text" 
      :placeholder="placeholder">
  </div>
</template>