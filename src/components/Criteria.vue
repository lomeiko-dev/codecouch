<script setup lang='ts'>
import { ref } from 'vue';
import CompCriteria from './CompCriteria.vue';


const criteriaList = ref([
  {
    color: "#CEF9FF",
    title: "Обучаетесь/Окончили курсы",
    experience:  "Еще не работали",
    list: ['-Прошли курсы, но необходимо набрать опыт работы', '-Занимаетесь самостоятельно, требуется поддержка', '-Желаете разработать план развития своих навыков', '-Ищете помощь в создании проекта для вашего портфолио']
  },
  {
    color: "#FFE5B4",
    title: "Средний уровень знаний",
    experience: "Опыт работы от 2 лет",
    list: ['-Изучение технологий ', '-Поддержка при принятии сложных технических решений', '-Ассистировать в выполнении домашнего проекта', '-Получить обратную связь о своих навыках от опытных коллег']
  },
  {
    color: "#FFC5C5",
    title: "Intern/Junior",
    experience: "Первая стажировка/работа",
    list: ['-Нашли работу, но сложно втягиваться', '-Требуется поддержка в решении сложных задач', '-Желание ускорить профессиональный рост']
  },
  {
    color: "#BFFFC2",
    title: "Startup/Business",
    experience: "",
    list: ['-Проведение обучения персонала по необходимым навыкам', '-Поддержка в проведении технических интервью', '-Консультации с востребованными специалистами для найма']
  }
])
</script>
<template>
    <h3 class=" flex justify-center font-semibold text-4xl leading-[46px] mt-[120px] ">CodeCouch будет вам полезен, если:</h3>
  <div class="grid gap-3 tablet:gap-16 grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 grid-rows-1  mx-auto w-fit mt-[50px] tablet:px-4">
    <CompCriteria v-for="(item, index) in criteriaList" :key="index" :title="item.title" :color="item.color" :experience="item.experience" :list="item.list"/>
  </div>
</template>
<style>
    
</style>