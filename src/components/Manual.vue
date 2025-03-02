<script setup lang='ts'>
import Manual1 from '../assets/manual1.webp'
import Manual2 from '../assets/manual2.webp'
import Manual3 from '../assets/manual3.webp'
import Manual4 from '../assets/manual4.webp'
</script>
<template>
  <div class="mt-[90px] flex justify-center">
    <p class=" font-semibold text-4xl leading-[46px]">Как это работает?</p>
  </div>
  <div class="bg-[#E7FFE6] py-8 mt-5 flex gap-8 overflow-x-auto px-3 tablet:justify-center">
    <img :src="Manual1" class="tablet:w-[152px] tablet:h-[288px] w-[169px] h-[320px]">
    <img :src="Manual2" class="tablet:w-[152px] tablet:h-[288px] w-[169px] h-[320px]">
    <img :src="Manual3" class="tablet:w-[152px] tablet:h-[288px] w-[169px] h-[320px]">
    <img :src="Manual4" class="tablet:w-[152px] tablet:h-[288px] w-[169px] h-[320px]">
  </div>
</template>
<style>
    
</style>