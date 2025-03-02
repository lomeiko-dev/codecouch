<script setup lang="ts"></script>
<template>
  <div class="bg-[#E9E9E9] pb-[150px]">
    <div class="flex pt-[43px] gap-2 ml-[133px]">
      <div class="flex items-center gap-2">
        <p class="text-sm cursor-pointer hover:text-[#729ACC] duration-300">
          Все заявки (126)
        </p>
        <p class="h-[22px]">|</p>
      </div>
      <div class="flex items-center gap-2">
        <p class="text-sm cursor-pointer hover:text-[#729ACC] duration-300">
          Просмотренные (120)
        </p>
        <p class="h-[22px]">|</p>
      </div>
      <div class="flex items-center">
        <p class="text-sm cursor-pointer hover:text-[#729ACC] duration-300">
          Новые (6)
        </p>
      </div>
      <button
        class="border border-black rounded-[5px] bg-white px-2 py-[2px] ml-4 hover:bg-[#E9E9E9] duration-300"
      >
        По дате
      </button>
    </div>
    <div class="border border-black w-[83%] mt-[36px] ml-[133px]">
      <div class="flex justify-сутеук border border-b-black h-[78px] bg-white">
        <div class="flex items-center">
          <p class="ml-[90px] w-[223px] text-center">
            ученик который пожаловался
          </p>
          <p class="ml-[10px] w-[223px] text-center">
            Ментор на кого пожаловались
          </p>
          <p class="ml-[180px]">Текст жалобы</p>
          <p class="ml-[280px]">Дата</p>
        </div>
      </div>
      <div
        class="flex justify-between items-center border border-b-black h-[78px]"
      >
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="ml-[48px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="flex gap-[86px] items-center mr-[100px]">
          <p class="mr-[100px]">Иван</p>
          <p class="mr-[100px]">Иванов</p>
          <p class="mr-[100px]">https://docs.google.com/document</p>
          <p class="text-center">24.04.24<br />15:43</p>
        </div>
      </div>
      <div
        class="flex justify-between items-center border border-b-black h-[78px] bg-white"
      >
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="ml-[48px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="flex gap-[86px] items-center mr-[100px]">
          <p class="mr-[100px]">Иван</p>
          <p class="mr-[100px]">Иванов</p>
          <p class="mr-[100px]">https://docs.google.com/document</p>
          <p class="text-center">24.04.24<br />15:43</p>
        </div>
      </div>
      <div
        class="flex justify-between items-center border border-b-black h-[78px]"
      >
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="ml-[48px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="flex gap-[86px] items-center mr-[100px]">
          <p class="mr-[100px]">Иван</p>
          <p class="mr-[100px]">Иванов</p>
          <p class="mr-[100px]">https://docs.google.com/document</p>
          <p class="text-center">24.04.24<br />15:43</p>
        </div>
      </div>
      <div
        class="flex justify-between items-center border border-b-black h-[78px] bg-white"
      >
        <div class="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="ml-[48px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div class="flex gap-[86px] items-center mr-[100px]">
          <p class="mr-[100px]">Иван</p>
          <p class="mr-[100px]">Иванов</p>
          <p class="mr-[100px]">https://docs.google.com/document</p>
          <p class="text-center">24.04.24<br />15:43</p>
        </div>
      </div>
    </div>

    <div class="flex ml-[116px] mt-[49px]">
      <button
        class="border border-black rounded-[5px] bg-white px-2 py-[2px] ml-4 hover:bg-[#E9E9E9] duration-300"
      >
        удалить
      </button>
      <button
        class="border border-black rounded-[5px] bg-white px-2 py-[2px] ml-4 hover:bg-[#E9E9E9] duration-300"
      >
        добавить
      </button>
      <button
        class="border border-black rounded-[5px] bg-white px-2 py-[2px] ml-4 hover:bg-[#E9E9E9] duration-300"
      >
        применить
      </button>
    </div>
  </div>
</template>
<style lang="scss"></style>
