<script setup lang="ts">
defineProps<{
  title: string, 
  placeholder: string
}>()
</script>

<template>
  <div class="flex flex-col gap-1 desktop:gap-2">
    <p class="
      text-xs 
      tracking-[3px] 
      text-smokey-gray
      
      desktop:text-sm
      desktop:tracking-[0.2rem]
      ">{{ title }}</p>
    <input 
      class="
        w-[5.5rem] 
        p-3 

        text-lg
        
        rounded-lg 
        outline-none 
        border-solid 
        border-[1px] 
        
        border-light-gray

        desktop:w-40
        desktop:p-4
        desktop:text-3xl        
        " 
      type="text" 
      :placeholder="placeholder">
  </div>  
</template>