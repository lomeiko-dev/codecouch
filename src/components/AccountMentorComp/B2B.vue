<script setup lang='ts'>
import { IMentor } from '@/api/services';
import videoImg from '../../assets/video.svg'
import Button from '../ui/Button.vue';
import { useRouter } from 'vue-router'

interface IProps extends Pick<IMentor, 'help' | 'price'>{}

const props = defineProps<IProps>()
const router = useRouter()

  
</script>
<template>
  <div class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div>
      <div class=" flex flex-col gap-4">
        <h4 class=" font-bold text-xl leading-[28px] ">B2B-консультация</h4>
        <div class="flex">
          <img :src="videoImg"/>
          <p class=" font-normal text-base leading-6">1 встреча в Zoom – 60 мин</p> 
        </div>
        <p class=" font-normal text-xs leading-[19px]">Консалтинг бизнеса</p>
      </div>
      <div>
        <ul class=" font-normal text-base leading-6 flex flex-col gap-2 pt-5">
          <li v-for="help in props.help">– {{ help }}</li>
        </ul>
      </div>
    </div>
    <h5 class=" font-bold text-base leading-6 laptop:w-[614px] mt-5">До консультации прошу выслать информацию о вашей компании, а также
ссылки на текущие соцсети, если они есть</h5>
    <p class=" font-normal text-sm leading-5 opacity-60 mt-5">Стоимость консультации ( 1 час )</p>
    <h5 class="font-bold text-xl leading-[28px] mt-5">{{ props.price }} ₽</h5>
    <Button text="Записаться" class="w-[90%] laptop:w-[384px] py-2 mt-5 font-medium text-sm leading-6" @click="router.push('/calendar')"/>
  </div>
</template>
