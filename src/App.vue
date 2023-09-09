<script setup lang="ts">
import { content } from './content';
import Display from './components/Display.vue'
import Entry from './components/Entry.vue'

import { onMounted } from 'vue';

onMounted(() => {
  document.body.className = 'font-poppins bg-off-white'
})
</script>

<template>
  <div class="
    flex 
    flex-col 
    items-center 
    justify-center 
    
    min-h-screen 
    m-4
    
    desktop:m-auto
    ">

    <!-- Card -->
    <div class="
      flex 
      flex-col 
      items-center 
      gap-16

      w-full
      p-6      

      rounded-3xl
      rounded-br-[100px]
      shadow-lg

      bg-white  

      desktop:items-start
      desktop:gap-12
      desktop:w-[52rem] 
      desktop:p-14
      desktop:rounded-[20px]
      desktop:rounded-br-[200px]
      desktop:shadow-xl
      ">

      <!-- Date Entry -->
      <div class="
        flex 
        flex-row 
        justify-between 
        w-full
        
        desktop:justify-start
        desktop:gap-8
        desktop:w-auto
        ">
        <Entry :title="'DAY'" :placeholder="'DD'"></Entry>
        <Entry :title="'MONTH'" :placeholder="'MM'"></Entry>
        <Entry :title="'YEAR'" :placeholder="'YYYY'"></Entry>
      </div>

      <!-- Divider -->
      <div class="
        relative 
        w-full 
        border-solid 
        border-[1px] 
        border-light-gray
        ">

        <!-- Submit Button -->
        <div class="
          absolute 
          p-4 

          left-[7.5rem] 
          -top-[1.8rem] 
          
          bg-purple         
          rounded-full

          desktop:p-6
          desktop:right-0
          desktop:-top-12
          desktop:left-auto

          hover:bg-off-black
          hover:cursor-pointer
          ">
          <img class="w-6 h-6 desktop:w-12 desktop:h-12" src="./assets/icon-arrow.svg">
        </div>
      </div>

      <!-- Display -->
      <div class="
        flex 
        flex-col 
        items-start 
        
        pb-8
        
        desktop:gap-12
        desktop:mt-10
        desktop:-mb-5
        desktop:p-0
        ">
        <Display :title="'years'" :amount="content.displays.years"></Display>
        <Display :title="'months'" :amount="content.displays.months"></Display>
        <Display :title="'days'" :amount="content.displays.days"></Display>
      </div>
    </div>
  </div>
</template>