<script setup lang="ts">
import { content } from '../content';
import Display from './Display.vue'
import Entry from './Entry.vue'
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
        <Entry :title="'DAY'" :placeholder="'DD'"></Entry>
        <Entry :title="'MONTH'" :placeholder="'MM'"></Entry>
        <Entry :title="'YYYY'" :placeholder="'YYYY'"></Entry>
      </div>

      <!-- Divider -->
      <div class="relative border-solid border-[1px] border-light-gray">
        <SubmitButton></SubmitButton>
      </div>

      <!-- Display -->
      <div class="flex flex-col gap-12 mt-10 -mb-5">
        <Display :title="'years'" :amount="content.displays.years"></Display>
        <Display :title="'months'" :amount="content.displays.months"></Display>
        <Display :title="'days'" :amount="content.displays.days"></Display>
      </div>
    </div>
  </div>
</template>