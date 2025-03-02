<script setup lang="ts">
import logo from '../assets/HeaderLogo.svg'
import magnifier from '../assets/Magnifier.svg'
import client from '../assets/Client.svg'
import menu from '../assets/Menu.svg'
import Button from './ui/Button.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue';
import SideBar from './SideBar.vue'

const router = useRouter()

const isOpenSidebar = ref(false)
</script>
<template>
  <div class="border-b-[1px] border-[#D5E0D5] relative">
  <div class="flex mx-auto  py-4 justify-around flex-col px-10 max-w-[1920px]">
    <div class="flex justify-between">
        <div class="flex items-center ">
        <img :src="logo" class=" w-[181px] cursor-pointer md:w-[220px] h-5 " @click="router.push('/')"/>
      </div>
      <div class="hidden md:flex items-center">
        <div class="gap-5 hidden xl:flex">
          <p class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text" @click="router.push('/becoming-mentor')">Стать наставником</p>
          <p class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text" @click="router.push('/#questions')">Вопрос-ответ</p>
          <p class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text" @click="router.push('/auth-client/student')">Вход для ученика</p>
          <p class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text" @click="router.push('/auth-client/mentor')">Вход для ментора</p>
        </div>
        <div class="flex gap-5 items-center ml-5">
         <Button @click="router.push('/search-mentor')" text="Подобрать ментора" class=" w-[188px] h-[40px]"/>
        </div>
      </div>
      <div class="flex md:hidden gap-5 items-center">
        <div>
            <inline-svg :src="magnifier" class=" text-[#6F766C]" @click="router.push('/search-mentor')"/>
        </div>
        <div>
          <inline-svg :src="client" class=" text-[#6F766C]" @click="router.push('/auth-client/student')"/>
        </div>
        <div>
          <inline-svg :src="menu" class="text-[#6F766C]" @click="isOpenSidebar = true"/>
        </div>
      </div>
    </div>
    
    <div class="md:flex xl:hidden justify-between my-5 hidden">
        <p @click="router.push('/search-mentor')" class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text">Наставники</p>
        <p @click="router.push('/becoming-mentor')" class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text">Стать наставником</p>
        <p @click="router.push('/#questions')" class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text">Вопрос-ответ</p>
        <p @click="console.log('пользователь выбрал пункт подарочные сертификаты')" class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text">Подарочные сертификаты </p>
        <p @click="console.log('пользователь нажал на ссылку отызывы')" class=" h-[17px] font-normal cursor-pointer hover:underline underline-offset-4 text-text">Отзывы</p>
      </div>
  </div>
  <SideBar v-model:is-open="isOpenSidebar" />
</div>

</template>
<style>
  
</style>