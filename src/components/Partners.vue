<script setup lang='ts'>
import imgPartners1 from '../assets/partners1.png'
import imgPartners2 from '../assets/partners2.png'
import imgPartners3 from '../assets/partners3.png'

</script>
<template>
  <h3 class=" font-bold text-2xl leading-9 text-center mt-[70px]">Наши партнеры</h3>
  <div class="flex justify-center mt-[20px]">
    <div
      class="w-[80vw] tablet:w-screen laptop:w-[80vw] laptop:h-[108px] border rounded-[10px] flex items-center justify-around flex-col tablet:flex-row px-3">
      <img :src="imgPartners1" class=" w-[141px] h-[70px] laptop:hidden">
      <p class="font-normal text-sm leading-[17px]">CodeCoach - сервис для поиска менора. Выполнен при
        поддержке<br>"Фонда содействия инновациям" в рамках федерального проекта<br>"Платформа университетского
        технологического предпринимательства"</p>
      <img :src="imgPartners1" class="hidden w-[141px] h-[70px] laptop:block">
      <div class="flex tablet:justify-between gap-[45px] flex-col tablet:flex-row items-center tablet:gap-0 justify-start">
        <img :src="imgPartners2" class="w-[167px] h-[76px] scale-75 tablet:scale-100">
        <img :src="imgPartners3" class="w-[102px] h-[102px] scale-100 tablet:scale-100">
      </div>
      
    </div>
  </div>
</template>
<style></style>