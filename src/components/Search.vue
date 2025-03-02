<script setup lang='ts'>
import Button from './ui/Button.vue'
import AutoComplete from 'primevue/autocomplete';
import magnifier from '../assets/Magnifier.svg'
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const searchValue = ref()
const search = (e: any) => {
  let _items = ['python', 'vue', 'JS', 'react', 'TS', 'Frontend']

  suggestions.value = e.query ? _items.filter((item:string) => item.toLowerCase().includes(e.query.toLowerCase()) ):_items ;
}

const suggestions = ref<string[]>([])
const { width } = useWindowSize() 

</script>
<template>
  <div class="flex justify-center flex-col tablet:flex-row items-center gap-5 mt-8">
    <div class=" relative">
      <inline-svg :src="magnifier" class=" text-[#6F766C] absolute top-[40%] left-[20px] z-40 size-4" ></inline-svg>
      <AutoComplete v-model="searchValue" dropdown :suggestions="suggestions" @complete="search" :input-style="{width: width > 768 ? '350px' : width > 1440 ? '500px' : width > 400 ? '350px' : '300px', height:'60px', paddingLeft: '50px'}" class="border rounded-md border-figma-green" placeholder="Навык или профессия"/>
    </div>
    <div>
      <Button text="Найти наставника" class="py[17px] px-[52px] w-[281px] h-[60px]"/>
    </div>
  </div>
</template>
<style>
  
</style>