<script setup lang='ts'>
import { ref } from 'vue';
import imgOpen from '../../assets/Open.svg'

interface Props {
  title: string
  list: string[]
}

const props = defineProps<Props>()
const isOpen = ref(false)
  
</script>
<template>
  <div class="rounded-[10px] bg-[#E7FFE6] w-[288px] py-[8px] overflow-y-hidden cursor-pointer" :class="isOpen ? 'max-h-[500px]': 'max-h-10'" @click="isOpen = !isOpen">
    <div class=" w-[262px] flex justify-between">
      <h3 class=" font-semibold text-base leading-6 ml-5">{{ props.title }}</h3>
      <img :src="imgOpen" class=" duration-500" :class="isOpen ? 'rotate-180' : 'rotate-0'">
    </div>
    <div @click.stop class="h-fit max-h-[200px] overflow-auto mt-5 px-5">
      <div v-for="(item, index) in props.list" :key="index">
        <input type="checkbox" :id="item+index" :name="item+index"/>
        <label :for="item+index" class="ml-2">{{item}}</label>
      </div>
    </div>
  </div>
</template>
<style>
    
</style>