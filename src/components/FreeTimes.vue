<script setup lang='ts'>
import Button from './ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
  
</script>
<template>
  <div class="flex justify-center mt-14">
    <div class="w-[870px] bg-[#E7FFE6] rounded-[10px] pb-14">
      <div class="flex justify-center">
        <p class=" font-semibold text-2xl leading-9 text-[#108A00] mt-5">15 бесплатных минут!</p>
      </div>
      <div class="flex justify-center">
        <p class="tablet:text-lg text-sm w-[80vw] tablet:w-full mx-auto leading-7 mt-5 tablet:text-center">У вас будет 15 минут бесплатной консультации для знакомства, обсуждения плана обучения и согласования удобного расписания занятий.</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <Button text="Подобрать ментора" class="px-[50px] py-[13px] mt-5" @click="router.push('/search-mentor')" />
  </div>
</template>
<style>
    
</style>