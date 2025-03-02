<script setup lang='ts'>
import MalovKV from '../../assets/MalovKV.png'
import strela from '../../assets/strela.svg'
import Divider from '../ui/Divider.vue';

</script>
<template>
  <div class="border rounded-[10px] w-[90vw] laptop:w-[1200px] mx-auto mt-[80px] shadow-2xl">
    <div class=" px-6 pt-9 flex flex-col laptop:flex-row mx-auto laptop:mx-0 justify-between">
      <div class="flex flex-col laptop:flex-row gap-14">
        <img :src="MalovKV" class="w-[170px] h-[170px] mx-auto laptop:mx-0" />
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3">
            <p class="font-medium text-base leading-[24px]">Имя:</p>
            <input placeholder="Иван" class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3">
          </div>
          <div class="flex flex-col gap-3">
            <p class="font-medium text-base leading-[24px]">Отчество:</p>
            <input placeholder="Иванович" class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3">
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-3">
          <p class="font-medium text-base leading-[24px]">Почта:</p>
          <input placeholder="qwerty@gmail.com" class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3">
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-medium text-base leading-[24px]">Телефон:</p>
          <input placeholder="+1-234-567-89-00" class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3">
        </div>
      </div>
    </div>
    <div class="px-6 flex justify-between">
      <div class="w-full">
        <div class="flex justify-between w-full laptop:w-[535px] mt-3 laptop:mt-0">
          <p class="font-medium text-base leading-[24px]">Mини описание:</p>
          <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 200 символов</p>
        </div>
        <textarea class="border rounded-[10px] h-[38px] w-full laptop:w-[535px] mt-2 px-3" />
      </div>
      <div class="mt-[40px]">
        <img :src="strela" class=" cursor-pointer hidden laptop:block" />
      </div>
    </div>
    <Divider class="mt-4 bg-[#E9E9E9]" />
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Обо мне:</p>
        <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea placeholder="– Присоединился к команде Утконоса в 2020, отвечаю за направление клиентских сервисов, команда
более 100 человек.
– В OZON занимался реферальной программой в качестве продакта реферальной программы.
– Участвовал в запуске приложений доставки продуктов Лента Онлай и Перекресток Впрок,
– Запускал мобильное приложение ювелирного гипермаркета SUNLIGHT."
        class="border rounded-[10px] h-[130px] w-full mt-2 px-3" />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">С чем вы можете помочь?</p>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">В каких компаниях вы работали</p>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">Какой уровень должен быть у ваших учеников?</p>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">В каких сферах вы компетентны?</p>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Кратко распишите с чем вы можете помочь:</p>
        <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea placeholder="Старт и развитиее карьеры в ИТ
Формирование команды и управление
Роадмап проекта, компании
Взаимодействие операционного бизнеса и ИТ
Карты компетенций
Формирование ИТ-бренда
Кризис-менеджмент
Работа с legacy, переход на новый стек" class="border rounded-[10px] h-[200px] w-full mt-2 px-3" />
    </div>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Перечислите где вы работали и какие должности там занимали</p>
        <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea placeholder="Утконос Онлайн — CTO
       Лента Онлайн  — CPO
        Перекресток, Х5  — PO
         Sunlight  — Head of Mobile" class="border rounded-[10px] h-[100px] w-full mt-2 px-3" />
    </div>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Блок с произвольной информацией (по желанию)</p>
        <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea class="border rounded-[10px] h-[50px] w-full mt-2 px-3" />
    </div>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Блок с произвольной информацией (по желанию)</p>
        <p class=" font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea class="border rounded-[10px] h-[50px] w-full mt-2 px-3" />
    </div>
    <div class="px-6 flex justify-between py-6">
      <div>
        <p class="font-medium text-base leading-[24px]">Цена за час</p>
        <input class="border rounded-[10px] h-[38px] w-[315px] px-3">
      </div>
      <img :src="strela" class="mt-5 hidden laptop:block" />
    </div>

  </div>
</template>
