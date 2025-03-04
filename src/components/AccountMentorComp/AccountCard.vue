<script setup lang="ts">
import MacBook from "../../assets/MacBook.png";
import Chip from "../../../src/components/ui/Chip.vue";
import { IMentor } from "@/api/services";

export type typeMentorAccountCard = Pick<
  IMentor,
  "avatar" | "fullname" | "description" | "lessonCount" | "companies" | "skills" | "spheres" | "position"
>;

const props = defineProps<typeMentorAccountCard>();
</script>

<template>
  <div class="border rounded-[10px] w-[90vw] tablet:w-[797px] mt-[70px] mx-auto shadow-xl">
    <div class="p-[24px]">
      <div class="flex gap-5 flex-col tablet:flex-row">
        <div :style="{ backgroundImage: `url(${props.avatar})` }" class="rounded-[5px] tablet:w-[168px] h-[300px] tablet:h-[112px] bg-center bg-cover"></div>
        <div class="flex mx-auto tablet:mx-0 flex-col gap-[4px]">
          <h5 class="font-semibold text-lg leading-6">{{ props.fullname }}</h5>
          <p class="font-normal text-sm leading-[19px] text-[#6F766C]">
            {{ props.position }}
          </p>
          <div class="flex gap-[4px]">
            <img :src="MacBook" class="w-5 h-5" />
            <p class="font-semibold text-base leading-5">{{ props.lessonCount }}</p>
            <p class="font-normal text-sm leading-5 text-[#6F766C]">Занятия проведено</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-[4px] mt-5">
        <Chip
          v-for="(item, index) in [...props.spheres, ...props.skills, ...props.companies]"
          :key="index"
          :text="item"
        />
      </div>
      <div class="pt-5">
        <div class="border-b border-[#108A00] w-[100px]">
          <h4 class="font-medium text-base leading-6 mb-2">Обо мне</h4>
        </div>
        <p class="font-normal text-sm leading-5 mt-4">– {{ props.description }}</p>
      </div>
    </div>
  </div>
</template>
