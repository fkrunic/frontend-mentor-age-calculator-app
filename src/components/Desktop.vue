<script setup lang="ts">
import { content } from '../content';
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">

    <!-- Card -->
    <div class="flex flex-col gap-4 bg-white">

      <!-- Date Entry -->
      <div class="flex flex-row">
        <div class="flex flex-col" v-for="entry of content.inputs">
          <p>{{ entry.title }}</p>
          <input 
            class="outline-none w-40 p-4 rounded border-solid border-[1px] border-light-gray"
            type="text" 
            :placeholder="entry.placeholder">
        </div>
      </div>

      <!-- Divider -->
      <div class="relative border-solid border-[1px] border-light-gray">

        <!-- Icon -->
        <div class="absolute p-8 bg-purple rounded-full">
          <img class="w-12 h-12" src="../assets/icon-arrow.svg" alt="bla">
        </div>        
      </div>

      <!-- Display -->
      <div class="flex flex-col">
        <div class="flex flex-row" v-for="entry of content.displays">
          <p>{{ entry.amount }}</p>
          <p>{{ entry.title }}</p>
        </div>
      </div>

    </div>
  </div>
</template>