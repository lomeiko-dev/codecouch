<script setup lang='ts'>
import Button from '../ui/Button.vue';


</script>
<template>

  <div class="flex flex-col gap-5 mt-[45px] w-fit mx-auto laptop:mx-0">
    <p class="font-medium text-lg leading-[22px]">Четверг, 4 марта</p>
    <Button text="11:30"
      class="border border-[#108A00] !text-figma-green bg-white rounded-[10px]  hover:!bg-figma-green hover:!text-white w-[220px] h-[60px]" />
    <Button text="14:00"
      class="border border-[#108A00] !text-figma-green bg-white rounded-[10px]  hover:!bg-figma-green hover:!text-white w-[220px] h-[60px]" />
    <Button text="14:30"
      class="border border-[#108A00] !text-figma-green bg-white rounded-[10px]  hover:!bg-figma-green hover:!text-white w-[220px] h-[60px]" />

  </div>
</template>
<style lang='scss'></style>