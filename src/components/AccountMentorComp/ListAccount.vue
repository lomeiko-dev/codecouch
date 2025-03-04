<script setup lang='ts'>
import { IMentor } from '@/api/services';


interface IProps extends Pick<IMentor, 'help'> {}

const props = defineProps<IProps>()
  
</script>
<template>
  <div class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div>
      <h2 class=" font-normal text-2xl leading-9">С чем могу помочь</h2>
      <ul class="font-normal text-sm leading-[23px] flex flex-col gap-2 mt-5">
        <li v-for="item in props.help">- {{ item }}</li>
      </ul>
    </div>
  </div>
</template>
