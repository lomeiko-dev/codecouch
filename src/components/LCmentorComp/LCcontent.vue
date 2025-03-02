<script setup lang="ts">
import anonim from "../../assets/anonim.png";
import Divider from "../ui/Divider.vue";
import CardClient from "../ui/CardClient.vue";
import ggg from "../../assets/right.svg";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { useWindowSize } from "@vueuse/core";

const clientList = ref([
  {
    date: 29,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: С 16:00 до 17:00",
  },
  {
    date: 30,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: СВремя: С 12:00 до 13:00",
  },
  {
    date: 31,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: С 14:00 до 15:00",
  },
  {
    date: 30,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: СВремя: С 12:00 до 13:00",
  },
  {
    date: 30,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: СВремя: С 12:00 до 13:00",
  },
]);
const PrclientList = ref([
  {
    date: 25,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: С 16:00 до 17:00",
  },
  {
    date: 12,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: СВремя: С 12:00 до 13:00",
  },
  {
    date: 7,
    month: "марта",
    day: "пятница",
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: С 14:00 до 15:00",
  },
]);
const MnclientList = ref([
  {
    name: "Владимир Малов",
    work: "CTO — U:tech by Utkonos",
    time: " Время: С 14:00 до 15:00",
  },
]);

const { width } = useWindowSize();
</script>

<template>
  <div
    class="border rounded-[10px] w-[90vw] laptop:w-[1200px] shadow-2xl mt-10 mx-auto pb-10"
  >
    <div class="p-3 tablet:p-9 flex flex-col tablet:flex-row justify-between">
      <div class="flex gap-4">
        <img
          :src="anonim"
          class="w-[100px] h-[100px] tablet:w-auto tablet:h-auto"
        />
        <h4
          class="font-normal hidden tablet:block text-lg tablet:text-[32px] w-fit leading-[39px]"
        >
          Юлия Кориевская
        </h4>
        <div class="flex flex-col gap-2 tablet:hidden">
          <h4
            class="font-normal tablet:hidden text-lg tablet:text-[32px] w-fit leading-[39px]"
          >
            Юлия Кориевская
          </h4>
          <p class="font-normal text-sm leading-[21px]">
            Тел. моб: +7(999) 777-55-22
          </p>
          <p class="font-normal text-sm leading-[21px]">
            Почта: abcdegr@yandex.ru
          </p>
        </div>
      </div>
      <div class="hidden tablet:flex flex-col gap-2">
        <p class="font-normal text-lg leading-[21px]">
          Тел. моб: +7(999) 777-55-22
        </p>
        <p class="font-normal text-lg leading-[21px]">
          Почта: abcdegr@yandex.ru
        </p>
      </div>
    </div>
    <Divider />
    <div class="p-9 flex justify-between">
      <div class="flex justify-between w-full">
        <p class="font-medium text-[22px] leading-[26px]">
          Ближайшие консультации
        </p>
        <!-- <p class=" font-medium text-[22px] leading-[26px]">Календарь</p> -->
      </div>
    </div>
    <div class="flex px-3 tablet:px-9 gap-5">
      <swiper
        :slides-per-view="width > 1250 ? 3 : width > 850 ? 2 : 1"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :space-between="2"
      >
        <swiper-slide v-for="(item, index) in clientList" :key="index">
          <CardClient
            :date="item.date"
            :month="item.month"
            :day="item.day"
            :name="item.name"
            :work="item.work"
            :time="item.time"
            :is-button="false"
            is-header
            :is-report="false"
            :is-feedback="false"
          />
        </swiper-slide>

        <div class="swiper-button-next">
          <img :src="ggg" class="w-[25px] cursor-pointer" />
        </div>
      </swiper>
    </div>
    <div class="p-9 flex justify-between">
      <p class="font-medium text-[22px] leading-[26px]">
        Предыдущие консультации
      </p>
    </div>
    <div class="flex px-3 tablet:px-9 gap-5">
      <swiper
        :slides-per-view="width > 1250 ? 3 : width > 850 ? 2 : 1"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :space-between="2"
      >
        <swiper-slide v-for="(item, index) in PrclientList" :key="index">
          <CardClient
            :date="item.date"
            :month="item.month"
            :day="item.day"
            :name="item.name"
            :work="item.work"
            :time="item.time"
            is-button
            is-header
            :is-report="false"
            :is-feedback="false"
          />
        </swiper-slide>
        <div
          class="swiper-button-next"
          v-if="
            (PrclientList.length > 3 && width > 1250) ||
            (PrclientList.length > 2 && width > 850) ||
            (PrclientList.length > 1 && width > 300)
          "
        >
          <img :src="ggg" class="w-[25px] cursor-pointer" />
        </div>
      </swiper>
    </div>
    <div class="p-9 flex justify-between">
      <p class="font-medium text-[22px] leading-[26px]">Мои менторы</p>
    </div>
    <div class="flex px-3 tablet:px-9 gap-5">
      <CardClient
        v-for="(item, index) in MnclientList"
        :key="index"
        :name="item.name"
        :work="item.work"
        :time="item.time"
        :is-button="false"
        :is-report="true"
        :is-feedback="true"
        :is-header="false"
      />
    </div>
  </div>
</template>
<style>
.swiper-button-next::after {
  display: none;
}
</style>
