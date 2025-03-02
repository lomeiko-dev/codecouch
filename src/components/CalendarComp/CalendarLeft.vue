<script setup lang='ts'>
import time from '../../assets/time.png'
import vidos from '../../assets/vidos.png'
  
</script>
<template>
  <div class="tablet:w-[342px] laptop:h-[485px] mx-auto flex flex-col">
    <div class="p-9">
      <div >
        <p class=" font-normal text-lg leading-[22px]">Ментор имя </p>
        <h2 class=" font-semibold text-[40px] leading-[82px]">Менторы</h2>
        <div class="flex flex-col gap-5">
          <div class="flex gap-2">
            <img :src="time" class="w-5 h-5"/>
            <p class=" font-normal text-sm leading-[17px] text-[#6F766C] my-auto">Длительность конференции</p>
          </div>
          <div class="flex gap-2">
           <img :src="vidos" class="w-5 h-5"/>
            <p class=" font-normal text-sm leading-[17px] text-[#6F766C] my-auto">Подробности конференции</p>
          </div>
        </div>
      </div>    
    </div>
    <div>
    </div>
  </div>
</template>
