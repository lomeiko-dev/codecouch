<script setup lang='ts'>
import imgTg from '../assets/telegram.svg'
import imgVk from '../assets/vk.svg'
  
</script>
<template>
  <div>
    <div class="flex flex-col justify-center mt-28">
      <h3 class=" font-normal text-2xl leading-[26px] text-center">Остались вопросы? </h3>
      <p class=" font-normal text-xl leading-[26px] text-center mt-2">Напиши нам</p>
    </div>
    <div class="flex justify-center mt-12 gap-[27px]">
      <div class=" cursor-pointer">
        <div class="w-[110px] h-[110px] border rounded-[10px] flex justify-center items-center">
          <div class="flex flex-col items-center justify-centers gap-2">
            <img :src="imgTg" class=" w-12 h-12">
            <p>Telegram</p>
          </div>
       </div>
     </div>
      <div class="cursor-pointer">
       <div class="w-[110px] h-[110px] border rounded-[10px] flex justify-center items-center">
          <div class="flex flex-col items-center justify-center gap-2">
            <img :src="imgVk" class=" w-12 h-12">
            <p>ВКонтакте</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    
</style>