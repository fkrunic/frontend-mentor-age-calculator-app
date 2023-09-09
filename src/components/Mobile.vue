<script setup lang="ts">
import { content } from '../content';
import MobileDisplay from './MobileDisplay.vue'

</script>

<template>

  <!-- Card -->
  <div class="
    flex 
    flex-col 
    items-center 
    justify-start 
    gap-16
    p-6

    mx-4
    mt-20

    rounded-t-3xl
    rounded-bl-3xl
    rounded-br-[100px]
    shadow-lg

    bg-white    
    ">

    <!-- Date Entry -->
    <div class="flex flex-row justify-between w-full">
      <div class="flex flex-col gap-1" v-for="entry of content.inputs">
        <p class="text-xs tracking-[3px] text-smokey-gray">{{ entry.title }}</p>
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
          :placeholder="entry.placeholder">
      </div>
    </div>

    <!-- Divider -->
    <div class="relative w-full border-solid border-[1px] border-light-gray">

      <!-- Icon -->
      <div class="absolute left-[7.5rem] -top-[1.8rem] bg-purple p-4 rounded-full">
        <img class="h-6 w-6" src="../assets/icon-arrow.svg">
      </div>
    </div>

    <!-- Display -->
    <div class="flex flex-col items-start pb-8">
      <MobileDisplay :title="'years'" :amount="content.displays.years"></MobileDisplay>
      <MobileDisplay :title="'months'" :amount="content.displays.months"></MobileDisplay>
      <MobileDisplay :title="'days'" :amount="content.displays.days"></MobileDisplay>
    </div>
  </div>
</template>