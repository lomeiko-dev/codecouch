<script setup lang='ts'>
import compFilter from './compFilter.vue';
import { ref } from 'vue';


const filterList = ref([
  {
    title: 'Что планируете изучить',
    list: ['Карьерный рост', 'Развить навыки руководителя', 'Перейти из фриланса в найм', 'Тестовое собеседование', 'Оценка навыков' ]
  },
  {
    title: 'По компаниям',
    list: ['OZON', 'Авито', 'Nexign', 'ГК Астра', 'Райффайзенбанк' ]
  },
  {
    title: 'Ваш уровень',
    list: ['Новичок', 'Обучаюсь самостоятельно', 'Прошел курсы', 'Junior', 'Middle', 'Senior', 'Kotlin' ]
  },
  {
    title: 'С чем вам помочь?',
    list: ['Java', 'JavaScript', 'JavaScript', 'Python', 'C++', 'C#', 'CSS', 'HTML', 'Kotlin', 'SVG', 'Canvas', 'React' ]
  }
])
  
</script>
<template>
  <div>
    <div class="flex gap-[78px]">
      <h2 class=" font-bold text-2xl leading-[33px]">Фильтры</h2>
      <p class=" font-normal text-sm leading-[17px] text-[#6F766C] flex items-center cursor-pointer">Сбросить все</p>
    </div>
    <div>
      <div class="flex flex-col gap-[10px] mt-5">
        <compFilter v-for="(item, index) in filterList" :key="index" :title="item.title" :list="item.list"/>
      </div>
    </div>
  </div>
</template>
<style lang='scss'>
    
</style>