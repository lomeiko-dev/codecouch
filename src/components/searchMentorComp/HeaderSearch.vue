<script setup lang="ts">
import logo from "../../assets/HeaderLogo.svg";
import magnifier from "../../assets/Magnifier.svg";
import client from "../../assets/Client.svg";
import menu from "../../assets/Menu.svg";
import Button from "../ui/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div
    class="flex border-b-[1px] border-[#D5E0D5] py-4 justify-around flex-col px-10"
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          :src="logo"
          class="w-[181px] cursor-pointer md:w-[220px] h-5"
          @click="router.push('/')"
        />
      </div>
      <div class="hidden md:flex items-center">
        <div class="gap-5 hidden xl:flex">
          <p
            class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
            @click="router.push('/becoming-mentor')"
          >
            Стать наставником
          </p>
          <p
            class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
          >
            Вопрос-ответ
          </p>
          <p
            class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
            @click="router.push('/auth-client')"
          >
            Вход для ученика
          </p>
          <p
            class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
            @click="router.push('/auth-client')"
          >
            Вход для ментора
          </p>
        </div>
        <div class="flex gap-5 items-center ml-5">
          <Button
            text="Подобрать ментора"
            class="py-[10px] px-[19px]"
            @click="router.push('/search-mentor')"
          />
        </div>
      </div>
      <div class="flex md:hidden gap-5 items-center">
        <div>
          <inline-svg :src="magnifier" class="text-[#6F766C]"></inline-svg>
        </div>
        <div>
          <inline-svg :src="client" class="text-[#6F766C]" />
        </div>
        <div>
          <inline-svg :src="menu" class="text-[#6F766C]" />
        </div>
      </div>
    </div>

    <div class="md:flex xl:hidden justify-between my-5 hidden">
      <p
        class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
      >
        Стать наставником
      </p>
      <p
        class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
      >
        Вопрос-ответ
      </p>
      <p
        class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
      >
        Вход для ученика
      </p>
      <p
        class="h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text"
      >
        Вход для ментора
      </p>
    </div>
  </div>
</template>
<style></style>
