<script setup lang='ts'>
interface Props {
  img: string
  name: string
  mentor: string
  text:string
}

  const props = defineProps<Props>()
</script> 
<template>
  <div class=" flex flex-col gap-3 border w-[500px] rounded-[10px] px-[65px] pb-[65px] h-fit pt-8 shadow-xl">
    <div class=" flex gap-5">
      <div>
        <img :src="props.img">
      </div>
      <div>
        <p class="font-semibold text-lg leanding-[22px]">{{ props.name }}</p>
        <p class="font-normal text-sm leanding-[20px]">{{ props.mentor }}</p>
      </div>
    </div>
    <div>
      <p class="font-normal text-sm leanding-[20px] mt-[50px] h-[120px] w-[345px]">{{ props.text }}</p>
    </div>
  </div>
</template>
<style>
    
</style>