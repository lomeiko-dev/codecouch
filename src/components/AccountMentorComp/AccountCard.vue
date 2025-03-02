<script setup lang="ts">
import { onMounted, ref } from "vue";
// import Malov from "../../assets/malov.png";
import MacBook from "../../assets/MacBook.png";
import Chip from "../../../src/components/ui/Chip.vue";

import { getMentor, IMentor } from "@/api/services";

const isLoading = ref(true);
const mentor = ref<IMentor>();

onMounted(async () => {
  const { data } = await getMentor("5");
  mentor.value = data;
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">Loading</div>

  <div
    v-else
    class="border rounded-[10px] w-[90vw] laptop:w-[797px] mt-[70px] mx-auto shadow-xl"
  >
    <div class="p-[24px]">
      <div class="flex gap-5 flex-col laptop:flex-row">
        <img
          :src="mentor?.photo"
          class="w-[80%] laptop:ma-0 laptop:w-[92px] laptop:h-[92px]"
        />
        <div class="flex mx-auto laptop:mx-0 flex-col gap-[4px]">
          <h5 class="font-semibold text-lg leading-6">
            {{ mentor?.name }} {{ mentor?.surname }}
          </h5>
          <p class="font-normal text-sm leading-[19px] text-[#6F766C]">
            {{ mentor?.description }}
          </p>
          <div class="flex gap-[4px]">
            <img :src="MacBook" class="w-5 h-5" />
            <p class="font-semibold text-base leading-5">4</p>
            <p class="font-normal text-sm leading-5 text-[#6F766C]">
              Занятия проведено
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-[4px] mt-5">
        <Chip
          v-for="(item, index) in mentor?.assistance_scope"
          :key="index"
          :text="item"
        />
      </div>
      <div class="pt-5">
        <div class="border-b border-[#108A00] w-[100px]">
          <h4 class="font-medium text-base leading-6 mb-2">Обо мне</h4>
        </div>
        <p class="font-normal text-sm leading-5 mt-4">
          – {{ mentor?.about_me }}
        </p>
      </div>
    </div>
  </div>
</template>
