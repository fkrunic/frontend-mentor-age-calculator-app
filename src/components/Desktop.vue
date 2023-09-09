<script setup lang="ts">
import { content } from '../content';
import DesktopDisplay from './DesktopDisplay.vue'
import DesktopEntry from './DesktopEntry.vue'
import SubmitButton from './SubmitButton.vue';
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
        <DesktopEntry :title="'DAY'" :placeholder="'DD'"></DesktopEntry>
        <DesktopEntry :title="'MONTH'" :placeholder="'MM'"></DesktopEntry>
        <DesktopEntry :title="'YYYY'" :placeholder="'YYYY'"></DesktopEntry>
      </div>

      <!-- Divider -->
      <div class="relative border-solid border-[1px] border-light-gray">
        <SubmitButton></SubmitButton>
      </div>

      <!-- Display -->
      <div class="flex flex-col -mb-5">
        <DesktopDisplay :title="'years'" :amount="content.displays.years"></DesktopDisplay>
        <DesktopDisplay :title="'months'" :amount="content.displays.months"></DesktopDisplay>
        <DesktopDisplay :title="'days'" :amount="content.displays.days"></DesktopDisplay>
      </div>
    </div>
  </div>
</template>