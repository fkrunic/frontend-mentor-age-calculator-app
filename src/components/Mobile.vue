<script setup lang="ts">
import { content } from '../content';
import MobileDisplay from './MobileDisplay.vue'
import Entry from './Entry.vue'
import SubmitButton from './SubmitButton.vue';
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
      <Entry :title="'DAY'" :placeholder="'DD'"></Entry>
      <Entry :title="'MONTH'" :placeholder="'MM'"></Entry>
      <Entry :title="'YEAR'" :placeholder="'YYYY'"></Entry>
    </div>

    <!-- Divider -->
    <div class="relative w-full border-solid border-[1px] border-light-gray">
      <SubmitButton></SubmitButton>
    </div>

    <!-- Display -->
    <div class="flex flex-col items-start pb-8">
      <MobileDisplay :title="'years'" :amount="content.displays.years"></MobileDisplay>
      <MobileDisplay :title="'months'" :amount="content.displays.months"></MobileDisplay>
      <MobileDisplay :title="'days'" :amount="content.displays.days"></MobileDisplay>
    </div>
  </div>
</template>