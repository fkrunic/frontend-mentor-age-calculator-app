<script setup lang="ts">
import { InputStatus } from '../app'

defineProps<{
  title: string, 
  placeholder: string,
  status: InputStatus
}>()

const emit = defineEmits<{
  (event: 'input', content: string): void
}>()

const onInput = (event: Event): void => {
  const input = (event.target as HTMLInputElement).value
  console.log(`Emitting: ${input}`)
  emit('input', input)
}

const inputBorder = (st: InputStatus): string => {
  return st.kind === 'invalid' ? 'border-soft-red' : 'border-light-gray'
}

const titleColor = (st: InputStatus): string => {
  return st.kind === 'invalid' ? 'text-soft-red' : 'text-smokey-gray'
}
</script>

<template>
  <div class="relative flex flex-col gap-1 desktop:gap-2">
    <p class="
      text-xs 
      tracking-[3px] 
      
      desktop:text-sm
      desktop:tracking-[0.2rem]
      "
      :class="titleColor(status)"
      >{{ title }}</p>
    <input 
      class="
        w-[5.5rem] 
        p-3 

        text-lg
        
        rounded-lg 
        outline-none 
        border-solid 
        border-[1px] 

        desktop:w-40
        desktop:p-4
        desktop:text-3xl        
        " 
      type="text" 
      :class="inputBorder(status)"
      :placeholder="placeholder"
      @input="onInput"
      >
      <p class="
        absolute 
        w-24

        top-20

        text-[7pt]
        italic 
        text-soft-red

        desktop:top-[7.2rem]
        desktop:text-[10pt]
        desktop:w-40
        " v-if="status.kind === 'invalid'"
        >{{ status.err }}</p>      
  </div>  
</template>