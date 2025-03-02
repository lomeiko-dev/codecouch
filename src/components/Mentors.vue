<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { useWindowSize } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { getMentorList, IMentor } from "@/api/services/mentor";

const mentors = ref<IMentor[]>([]);

onMounted(async () => {
  const result = await getMentorList(1, 4);
  mentors.value = result.data
});
const { width } = useWindowSize();

const router = useRouter();

const routingToMentorDetail = (id: number) => {
  router.push(`/account-mentor/${id}`);
};
</script>
<template>
  <div>
    <div>
      <p
        class="font-normal text-2xl flex justify-center mt-[100px] mx-auto laptop:mx-0 w-[80vw] text-center laptop:w-auto laptop:text-left"
      >
        Выберите своего ментора из более чем 600 опытных специалистов.
      </p>
    </div>
    <div class="justify-center gap-[50px] mt-8 tablet:flex hidden">
      <div
        @click="routingToMentorDetail(item.id)"
        class="w-[200px] h-[250px] bg-cover bg-center rounded-xl flex pb-8 px-4 laptop:w-[300px] laptop:h-[400px] cursor-pointer"
        v-for="(item, index) in mentors"
        :key="index"
        :style="{ backgroundImage: `url(${item.avatar})` }"
      >
        <div class="self-end">
          <p class="font-medium text-sm text-white">{{ item.fullname }}</p>
          <p class="font-bold text-xl text-white">{{ item.position }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="tablet:hidden mt-8">
    <swiper
      :slides-per-view="width > 450 ? 2 : 1"
      :modules="[Pagination, Navigation]"
      :navigation="true"
      :centeredSlides="width > 450 ? true : false"
      :pagination="{ clickable: true }"
      :space-between="2"
    >
      <swiper-slide v-for="(item, index) in mentors" :key="index">
        <div
          @click="routingToMentorDetail(item.id)"
          class="w-full tablet:w-[70%] h-[300px] tablet:h-[400px] bg-cover bg-center rounded-xl flex pb-8 px-4 laptop:w-[300px] laptop:h-[400px] cursor-pointer"
          :style="{ backgroundImage: `url(${item.avatar})` }"
        >
          <div class="self-end">
            <p class="font-medium text-sm text-white">{{ item.fullname }}</p>
            <p class="font-bold text-xl text-white">{{ item.position }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style></style>
