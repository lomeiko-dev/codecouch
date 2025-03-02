<script setup lang='ts'>
import AutoComplete from 'primevue/autocomplete';
import magnifier from '../../assets/Magnifier.svg'
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const searchValue = ref()
const search = (e: any) => {
  let _items = ['python', 'vue', 'JS', 'react', 'TS', 'Frontend']

  suggestions.value = e.query ? _items.filter((item:string) => item.toLowerCase().includes(e.query.toLowerCase()) ):_items ;
}

const suggestions = ref<string[]>([])

const {width} = useWindowSize()
</script>
<template>
  <div class="flex justify-center gap-5 mt-8">
    <div class="relative">
      <inline-svg :src="magnifier" class=" text-[#6F766C] absolute top-[40%] left-[20px] z-40 size-4" ></inline-svg>
      <AutoComplete v-model="searchValue" dropdown :suggestions="suggestions" @complete="search" :input-style="{width: width > 600 ? '500px' : '300px', height:'60px', paddingLeft: '50px'}" class="border rounded-md border-figma-green" placeholder="Навык или профессия"/>
    </div>
    <div>
    </div>
  </div>
</template>
<style>
  
</style>