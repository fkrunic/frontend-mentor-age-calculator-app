<script setup lang="ts">
import { content } from '../content';
import DesktopDisplay from './DesktopDisplay.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">

    <!-- Card -->
    <div class="
      flex 
      flex-col 
      gap-12

      p-14
      w-[52rem]  

      rounded-[20px]
      rounded-br-[200px]
      
      bg-white
      ">

      <!-- Date Entry -->
      <div class="flex flex-row gap-8">
        <div class="flex flex-col gap-2" v-for="entry of content.inputs">
          <p class="text-sm tracking-[0.2rem] text-smokey-gray/80">{{ entry.title }}</p>
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
            :placeholder="entry.placeholder">
        </div>
      </div>

      <!-- Divider -->
      <div class="relative border-solid border-[1px] border-light-gray">

        <!-- Icon -->
        <div class="absolute p-6 right-0 -top-12 bg-purple rounded-full">
          <img class="w-12 h-12" src="../assets/icon-arrow.svg" alt="bla">
        </div>        
      </div>

      <!-- Display -->
      <div class="flex flex-col -mb-5">
        <DesktopDisplay :title="'years'" :amount="content.displays.year"></DesktopDisplay>
        <DesktopDisplay :title="'months'" :amount="content.displays.month"></DesktopDisplay>
        <DesktopDisplay :title="'days'" :amount="content.displays.day"></DesktopDisplay>
      </div>
    </div>
  </div>
</template>