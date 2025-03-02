<script setup lang='ts'>
import Divider from './Divider.vue';
import MalovKV from '../../assets/MalovKV.png'
import Button from './Button.vue';


interface Props {
  date?: number
  month?: string
  day?: string
  name: string
  work: string
  time: string
  isButton: boolean
  isHeader: boolean
  isReport: boolean
  isFeedback: boolean
}

const props = defineProps<Props>()


</script>
<template>
  <div class="border rounded-[10px] w-[280px] tablet:w-[340px] pb-2">
    <div v-if="props.isHeader" class="flex gap-[6px] p-4">
      <p class=" font-medium text-2xl tablet:text-[40px] leading-[48px]">{{ props.date }}</p>
      <div class="flex flex-col">
        <p class=" font-medium text-xl tablet:text-[22px] leading-[26px]">{{ props.month }}</p>
        <p class=" font-medium text-xl tablet:text-[22px] leading-[26px]">{{ props.day }}</p>
      </div>
    </div>
    <Divider class="bg-[#6F766C]" v-if="props.isHeader" />
    <div class=" border rounded-[10px] w-[95%] tablet:w-[340px]w-[304px] h-[104px] my-4 mx-auto">
      <div class="flex gap-4 h-full">
        <img :src="MalovKV" class="w-[96px] h-full" />
        <div class="flex flex-col gap-1 justify-center">
          <h3 class=" font-semibold text-sm tablet:text-lg leading-6 ">{{ props.name }}</h3>
          <p class=" font-normal text-xs tablet:text-sm leading-5 text-[#001E00]">{{ props.work }}</p>
          <p class=" font-medium text-xs tablet:text-[15px] leading-5">{{ props.time }}</p>
        </div>
      </div>
    </div>
    <Button v-if="$props.isButton" text="Подробнее" class="block w-[95%] tablet:w-[308px] h-10 mx-auto" />
    <Button v-if="$props.isReport" text="Пожаловаться"
      class="block w-[95%] tablet:w-[308px] h-10 mx-auto bg-[#FF0505]" />
    <Button v-if="$props.isFeedback" text="Оставить отзыв" class="block w-[95%] tablet:w-[308px] h-10 mx-auto mt-3" />
  </div>
</template>
