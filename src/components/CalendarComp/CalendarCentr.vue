<script setup lang='ts'>
import Calendar from 'primevue/calendar';
import { ref } from "vue";

const date = ref();
  
</script>
<template>
  <div class=" flex gap-10 laptop:pt-5">
    <div>
      <h3 class="font-semibold w-fit mx-auto laptop:mx-0 text-2xl leading-[29px]">Дата & Время</h3>
      <div class="flex justify-center">
        <Calendar v-model="date" inline showWeek class="scale-75 tablet:scale-100"/>
      </div>
    </div>
   
  </div>
  
</template>
<style>
</style>