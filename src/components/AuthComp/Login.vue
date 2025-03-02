<script setup lang='ts'>
import ButtonAuth from '../ui/ButtonAuth.vue';
  
</script>
<template>
  
    <div class="border rounded-[10px] w-[80vw] h-fit laptop:w-[558px] mt-[70px] mx-auto shadow-xl">
    <div class=" p-9">
      <h4 class=" font-semibold text-xl leading-6">Войдите или зарегистрируйтесь</h4>
      <p class=" font-normal text-lg leading-[21px] mt-8">Через соцсеть или сервис</p>
      <div class="mt-8 flex gap-[12px]">
        <ButtonAuth text="Google" class="w-[237px] h-[52px] font-normal text-base leading-[19px]"/>
        <ButtonAuth text="VK" class="w-[237px] h-[52px] font-normal text-base leading-[19px]"/>
      </div>
      <p class=" font-normal text-lg leading-[22px] text-[#6F766C] mt-[50px]">Другим способом</p>
      <ButtonAuth text="Почта" class="w-full laptop:w-[486px] h-[54px] mt-5"/>
      <p class=" font-light text-xs leading-[14px] text-[#6F766C] mt-5">Регистрируясь в сервисе, принимаю условия соглашения и <span class=" underline-offset-1 underline cursor-pointer">политики конфиденциальности</span></p>
    </div>
  </div>
</template>
