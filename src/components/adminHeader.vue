<script setup lang="ts">
import logo from "../assets/LogoAdmin.png";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="bg-[#25282C] w-full h-[60px] flex justify-between items-center">
    <img :src="logo" class="w-[220px] h-[26px] ml-5" />
    <div class="flex gap-[80px] h-full mr-[112px]">
      <div
        class="hover:bg-[#323238] h-full flex items-center px-5 duration-300"
        @click="router.push('/Admin1')"
      >
        <div class="flex gap-[7px] cursor-pointer items-center">
          <div class="text-white text-2xl font-normal">Заявки менторов</div>
          <div
            class="rounded-full text-white bg-[#CD5631] w-[20px] h-[20px] flex justify-center items-center"
          >
            4
          </div>
        </div>
      </div>
      <div
        class="hover:bg-[#323238] h-full flex items-center px-5 duration-300"
        @click="router.push('/Admin2')"
      >
        <div class="flex gap-[7px] cursor-pointer items-center">
          <div class="text-white text-2xl font-normal">Жалобы</div>
          <div
            class="rounded-full text-white bg-[#CD5631] w-[20px] h-[20px] flex justify-center items-center"
          >
            6
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
