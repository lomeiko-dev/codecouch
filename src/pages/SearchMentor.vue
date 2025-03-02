<script setup lang='ts'>
import Filter from '../components/searchMentorComp/Filter.vue';
import Search from '../components/searchMentorComp/stringSearch.vue';
import Card from '../components/searchMentorComp/Card.vue'
import MainLayout from '../components/MainLayout.vue'
import Button from '../components/ui/Button.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';


const isOpenFilters = ref(false)

const toggleFilters = () => {
  isOpenFilters.value = !isOpenFilters.value
}

const mentors = ref()
const getMentors = () => {
  axios.get('https://mentors.web-gen.ru:444/api/service-main/search/mentor?search=Обомне&level=1,2&assistance=3,2&company=1,4&study=7&page=1')
    .then(function (response) {
      if (response.status === 200) {
      mentors.value = response.data
      }
    })
}
onMounted(() => {
  getMentors()
})

</script>
<template>
  <MainLayout>
    <div class="w-fit mx-auto">
      <div class="flex flex-col gap-[24px] mt-[50px]">
        <h1 class=" font-bold text-[40px] leading-[48px] w-fit mx-auto tablet:mx-0">Поиск наставника</h1>
        <p class=" font-normal text-lg leading-[25px] hidden tablet:block">50+ действующих специалистов из ведущих компаний России и
          мира.<br>Найди себе подходящего наставника, впиши в поиск те дисциплины в которых нужна<br>помощь или
          воспользуйся фильтрами на сайте</p>
      </div>
      <div class="flex mt-14 gap-[50px]">
        <Filter class="laptop:block hidden" />
        <div class="flex flex-col justify-center w-fit mx-auto">
          <Search />
          <p class=" font-normal text-lg mt-5 leading-[25px] tablet:hidden tablet:max-w-[558px] max-w-[350px] mx-auto">50+ действующих специалистов<br>Найди себе подходящего наставника, впиши в поиск те дисциплины в которых нужна помощь или воспользуйся фильтрами на сайте</p>
          <Button text="Фильтры" class="w-[250px] h-10 mx-auto mt-5 laptop:hidden" @click="toggleFilters"/>
          <div class="overflow-hidden laptop:hidden duration-500 mt-5" :class="isOpenFilters ? 'max-h-[1000px]' : 'max-h-0'" >
            <Filter class="mx-auto w-fit" />
          </div>
          <Card class="mt-10" v-for="(index) in [...Array(3)]" :key="index" />
          <div class="flex justify-center">
            <Button text="Показать еще 51 ментора"
              class="w-[250px] h-[40px] font-medium text-sm leading-4 mt-[100px] bg-white border-[#108A00] !text-black hover:!bg-[#E9E9E9]" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<style></style>