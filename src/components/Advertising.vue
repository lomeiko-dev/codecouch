<script setup lang='ts'>
import Button from './ui/Button.vue'
import imgAdvertising from '../assets/Advertising.png'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div class="flex justify-center ">
    <div class=" flex w-[80vw] laptop:w-[863px] rounded-[10px] mt-[70px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.3)] relative">
      <div class="px-[40px] py-[25px]">
       <p class=" font-semibold text-[22px] leading-[30px]">Вы только начинаете свой путь в области IT и заинтересованы в<br>том, чтобы пройти этот путь вместе с ментором до<br>трудоустройства?</p>
       <div class="flex mt-6">
         <p class=" font-normal text-sm leading-[14px]">Мы подобрали менторов, готовых обучать начинающих!</p>
          <img :src="imgAdvertising" class="hidden tablet:block absolute right-[30px] bottom-[40px] scale-75 laptop:scale-100"/>
        </div>
        <div>
          <Button text="Подробнее" class="px-[50px] py-[13px] mt-10" @click="router.push('/becoming-mentor')"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
    
</style>