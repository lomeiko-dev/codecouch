<script setup lang='ts'>
interface Props {
  title: string
  color: string
  experience: string
  list:string[]
}

  const props = defineProps<Props>()
</script>
<template>
  <div class=" flex flex-col gap-3 border w-screen tablet:w-[40vw] laptop:w-[500px] rounded-[10px] px-7 pb-10 h-fit pt-8 shadow-xl" :style="{backgroundColor:props.color}">
    <div>
      <h3 class=" font-semibold text-2xl leanding-[29px]">{{props.title}}</h3>
    </div>
    <div class="h-5">
      <p class=" font-normal text-sm leanding-[17px] text-[#6F766C]">{{props.experience}}</p>
    </div>
    <ul class=" font-normal text-sm leanding-[26px] ">
      <li v-for="(item, index) in props.list" :key="index">{{ item }} </li>
    </ul>
  </div>
</template>
<style>
    
</style>