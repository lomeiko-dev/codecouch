<script setup lang='ts'>
interface Props {
  img: string
  title: string
  text: string
}

  const props = defineProps<Props>()
</script>
<template>
  <div>
    <img :src="props.img"/>
    <div>
      <h3 class=" font-semibold text-2xl leading-[22px] py-5 w-[346px]">{{ props.title }}</h3>
      <p class=" font-normal text-lg leading-5 w-[255px]">{{ props.text }}</p>
    </div>
  </div>
</template>
<style>
    
</style>