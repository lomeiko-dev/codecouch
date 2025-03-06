<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { IFeedback } from "@/api/services/feedback";
import anonim from '@/assets/anonim.png'

interface IProps {
  feedbacks: IFeedback[];
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <h3 class="font-bold text-[25px] leading-[34px] text-center">Отзывы</h3>
    <Swiper class="pt-[10px]" :slides-per-view="1" :modules="[Navigation]" navigation space-between="1">
      <SwiperSlide
        class="!flex !justify-center !items-center"
        v-for="(feedback, index) in props.feedbacks"
        :key="index"
      >
        <div class="px-10 w-full">
          <div class="flex">
            <div
              :style="{ backgroundImage: `url(${feedback.avatar === '' ? anonim : feedback.avatar})` }"
              class="w-[60px] h-[60px] bg-center bg-cover rounded-full"
            ></div>

            <p class="text-center my-auto font-semibold text-base tablet:text-xl leading-[27px] ml-2">
              {{ feedback.fullname }}
            </p>
          </div>
          <p class="mt-5">
            {{ feedback.comment }}
          </p>
        </div>
      </SwiperSlide>
      <template #navigation>
        <button class="swiper-button-prev"></button>
        <button class="swiper-button-next"></button>
      </template>
    </Swiper>
  </div>
</template>
<style>
.swiper-button-prev::after, .swiper-button-next::after{
  font-size: 20px;
}
</style>
