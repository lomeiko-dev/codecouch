<script setup lang='ts'>
import { ref } from 'vue';
import Categoria from './ui/Categoria.vue';

const categoriesList = ref([
  {
    title: "Разработка и IT",
    grade: "4.8",
    specialists: "49 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['Java', 'JavaScript', 'Python', 'C++', 'C#', 'Kotlin']
    }
  },
  {
    title: "Frontend",
    grade: "4.3",
    specialists: "30 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['React', 'Angular', 'Vue.js', 'Redux', 'Webpack']
    }
  },
  {
    title: "Backend",
    grade: "4.7",
    specialists: "24 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['Spring', 'Django', 'NodeJs', 'ASP.NET', 'REST API']
    }
  },
  {
    title: "Machine Learning",
    grade: "4.1",
    specialists: "13 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['Data Science', 'Компьютерное зрение', 'Tensorflow', 'Pytorch', 'NLP']
    }
  },
  {
    title: "Mobile",
    grade: "4.2",
    specialists: "22 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['Android', 'IOS', 'Flutter', 'Firebase', 'React Native']
    }
  },
  {
    title: "Design",
    grade: "3.8",
    specialists: "5 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['UI Kit', 'Figma', 'CJM', 'UX', 'UX']
    }
  },
  {
    title: "Тестирование",
    grade: "4.9",
    specialists: "15 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['QA', 'Selenium', 'Appium', 'Postman', 'Selenide']
    }
  },
  {
    title: "Инфраструктура",
    grade: "4.4",
    specialists: "10 специалистов",
    listSkills: {
      subtitle: "Языки",
      list: ['DevOps', 'AWS', 'CI/CD', 'Docker', 'Linux']
    }
  }
])

</script>
<template>
  <div>
    <div class=" flex flex-col mt-[200px]">
      <h3 class=" font-semibold text-4xl leading-[46px] text-center">Выберите нужную категорию</h3>
      <p class=" font-normal text-2xl leading-9 text-center mt-3">И начните заниматься с IT специалистами 1 на
        1<br>прямо сейчас</p>
    </div>
    <div class="grid gap-3 xl:gap-16 grid-cols-4 grid-rows-[85px] mx-auto w-fit mt-[70px] h-[436px]">
      <Categoria v-for="(item, index) in categoriesList" :key="index" :title="item.title" :grade="item.grade"
        :specialists="item.specialists" :list-skils="item.listSkills" :style="{ zIndex: -index + 10 }" />
    </div>
  </div>
</template>
<style></style>