 <script setup lang='ts'>
import { ref } from 'vue';
import imgOpen from '../../assets/Open.svg'
import Star from '../../assets/star.png'

interface Props {
  title: string
  grade: string
  specialists: string
  listSkils: {
    subtitle: string
    list: string[]
  }
}

const props = defineProps<Props>()
const isOpen = ref(false)
  
</script>
<template>
  <div class="w-[248px] border-[1px] pb-3 rounded-[10px] cursor-pointer overflow-hidden bg-white duration-500 h-fit ease-linear" :class="isOpen ? 'max-h-[500px]': 'max-h-[83px] '" @click="isOpen = !isOpen">
    <div class="flex p-3 justify-between">
      <p class=" font-normal text-[22px] leadin-[27px]">{{ props.title }}</p>
      <img :src="imgOpen" class=" duration-500" :class="isOpen ? 'rotate-180' : 'rotate-0'">
    </div>
    <div class="flex justify-around">
      <div class="flex gap-2">
        <img :src="Star" class=" w-[14px] h-[14px]">
        <p class=" font-normal text-sm leading-5  text-[#6F766C]">{{ props.grade }}/5</p>
      </div>
      <p class=" font-normal text-base leading-5 text-[#6F766C]">{{ props.specialists }}</p>
    </div>
    <div class="mt-5 px-3">
      <h5 class=" font-semibold text-lg leading-6 mt-5 px-3">{{ props.listSkils.subtitle }}</h5>
      <ul class="flex flex-col px-3 gap-3 mt-3 cursor-pointer">
        <li v-for="(item, index) in props.listSkils.list" :key="index" class=" font-normal text-sm leading-[17px]  border-b-2">{{ item}}</li>
      </ul>
    </div>
  </div>
</template>
<style>
    
</style>