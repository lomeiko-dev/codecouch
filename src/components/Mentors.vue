<script setup lang='ts'>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import { useWindowSize } from '@vueuse/core';

const imgList = ref([
  {
    name: "Роман Кориневский",
    text: "Senior Business Analyst в Quantori",
    img: "http://priroda.club/uploads/posts/2022-07/1658478016_13-priroda-club-p-krasivie-prirodnie-peizazhi-priroda-krasiv-13.jpg"
  },
  {
    name: "Лиана Бубнова",
    text: "Senior Software Engineer в EPAM",
    img: "https://i.artfile.ru/3000x2000_844381_[www.ArtFile.ru].jpg"
  },
  {
    name: "Юлия Кориневская",
    text: "Product Owner в Samokat.Tech",
    img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666389923_30-mykaleidoscope-ru-p-klassnaya-priroda-oboi-32.jpg"
  },
  {
    name: "Николай Пиневич",
    text: "Data Scientist в Альфа-банк, SkillFactory",
    img: "https://gas-kvas.com/uploads/posts/2023-02/1675484237_gas-kvas-com-p-kartinki-dlya-fonovogo-risunka-raboch-stol-15.jpg"
  },
  
])

const {width} = useWindowSize()
</script>
<template>
  <div>
    <div>
      <p class="font-normal text-2xl flex justify-center mt-[100px] mx-auto laptop:mx-0 w-[80vw] text-center laptop:w-auto laptop:text-left">Выберите своего ментора из более чем 600 опытных
        специалистов.</p>
    </div>
    <div class="justify-center gap-[50px] mt-8 tablet:flex hidden">
      <div class="w-[200px] h-[250px] bg-cover bg-center rounded-xl flex pb-8 px-4 laptop:w-[300px] laptop:h-[400px]"
        v-for="(item, index) in imgList" :key="index" :style="{ backgroundImage: `url(${item.img})` }">
        <div class=" self-end">
          <p class=" font-medium text-sm text-white">{{ item.name }}</p>
          <p class=" font-bold text-xl text-white">{{ item.text }}</p>
        </div>
      </div>

    </div>
  </div>
  <div class="tablet:hidden mt-8">
    <swiper :slides-per-view="width > 450 ? 2  : 1" :modules="[
      Pagination, Navigation
    ]" :navigation="true" :centeredSlides="width > 450 ? true : false" :pagination="{ clickable: true }" :space-between="2" >
      <swiper-slide v-for="(item, index) in imgList" :key="index">
        <div class="w-full tablet:w-[70%] h-[300px] tablet:h-[400px] bg-cover bg-center rounded-xl flex pb-8 px-4 laptop:w-[300px] laptop:h-[400px]"
          :style="{ backgroundImage: `url(${item.img})` }">
          <div class=" self-end">
            <p class=" font-medium text-sm text-white">{{ item.name }}</p>
            <p class=" font-bold text-xl text-white">{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>

</style>