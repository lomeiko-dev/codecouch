<script setup lang='ts'>
import logo from '../assets/HeaderLogo.svg'

</script>
<template>
  <div
    class="min-h-[270px] bg-[#E7FFE6] mt-[100px] flex flex-col laptop:flex-row items-center laptop:items-start justify-around">
    <div class="mt-[50px]">
      <img :src="logo">
    </div>
    <div class="flex flex-col items-center laptop:items-start gap-[9px] mt-[50px]">
      <h4 class=" font-semibold text-[14px] leading-[17px]">Ссылки:</h4>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Посмотреть наставников</p>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Стать наставником</p>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Вопрос-ответ</p>
    </div>
    <div class="flex flex-col items-center laptop:items-start gap-[9px] mt-[50px]">
      <h4 class=" font-semibold text-[14px] leading-[17px]">Для компаний:</h4>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Юридическая информация</p>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Пользовательское соглашение</p>
    </div>
    <div class="flex flex-col items-center laptop:items-start gap-[9px] mt-[50px]">
      <h4 class=" font-semibold text-[14px] leading-[17px]">Контакты:</h4>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Почта</p>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">ТГ</p>
      <p class=" font-normal text-[14px] leading-[17px] cursor-pointer">Вк</p>
    </div>
    <p class=" font-normal text-[13px] leading-[18px] mt-5 laptop:mt-0 text-center bg-[#E7FFE6] laptop:hidden">ООО
      "КодКоуч" © {{ new Date().getFullYear() }}</p>
  </div>
  <p class=" font-normal text-[13px] leading-[18px] mt-5 laptop:mt-0 text-center bg-[#E7FFE6] hidden laptop:block">ООО
    "КодКоуч" © {{ new Date().getFullYear() }}</p>
</template>
<style></style>