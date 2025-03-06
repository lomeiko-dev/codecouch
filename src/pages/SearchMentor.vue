<script setup lang="ts">
import Filter from "../components/searchMentorComp/Filter.vue";
import Card from "../components/searchMentorComp/Card.vue";
import MainLayout from "../components/MainLayout.vue";
import Search from "../components/Search.vue";
import Button from "../components/ui/Button.vue";
import { onMounted, ref, watch } from "vue";
import { IMentor } from "@/api/services";
import { getMentorList } from "@/api/services/mentor";
import InfinityScroll from "@/components/ui/InfinityScroll.vue";
import { useFilterSotre } from "@/shared/store/filterStore";
import { storeToRefs } from "pinia";

const LIMIT = 3;
const page = ref<number>(1);

const isOpenFilters = ref(false);
const isPaginate = ref(false);
const mentors = ref<IMentor[]>([]);
const totalCount = ref<number>(0);

const filterStore = useFilterSotre()
const { filterString } = storeToRefs(filterStore)

onMounted(async () => {
  filterStore.loadFilterArguments()
  filterStore.compileParams()
  await handleLoadData()
})

const toggleFilters = () => {
  isOpenFilters.value = !isOpenFilters.value;
};

const handleLoadData = async (isClear: boolean = false) => {
  const result = (await getMentorList(page.value, LIMIT, filterString.value)).data;
  
  if (isClear) {
    mentors.value = [];
  }

  mentors.value = [...mentors.value, ...result.mentors];
  totalCount.value = result.totalCount;

  page.value++;

  console.log(mentors.value)
};

watch(() => filterString.value, async () => {
  page.value = 1;
  await handleLoadData(true);
  filterStore.saveFilterArguments()
})

</script>
<template>
  <MainLayout>
    <div class="w-fit mx-auto">
      <div class="flex flex-col gap-[24px] mt-[50px]">
        <h1 class="font-bold text-[40px] leading-[48px] w-fit mx-auto tablet:mx-0">Поиск наставника</h1>
        <p class="font-normal text-lg leading-[25px] hidden tablet:block">
          50+ действующих специалистов из ведущих компаний России и мира.<br />Найди себе подходящего наставника, впиши
          в поиск те дисциплины в которых нужна<br />помощь или воспользуйся фильтрами на сайте
        </p>
      </div>
      <div class="flex mt-14 gap-[50px]">
        <Filter class="laptop:block hidden" />
        <div class="flex flex-col justify-center w-fit mx-auto">
          <Search />
          <p class="font-normal text-lg mt-5 leading-[25px] tablet:hidden tablet:max-w-[558px] max-w-[350px] mx-auto">
            50+ действующих специалистов<br />Найди себе подходящего наставника, впиши в поиск те дисциплины в которых
            нужна помощь или воспользуйся фильтрами на сайте
          </p>
          <Button text="Фильтры" class="w-[250px] h-10 mx-auto mt-5 laptop:hidden" @click="toggleFilters" />
          <div
            class="overflow-hidden laptop:hidden duration-500 mt-5"
            :class="isOpenFilters ? 'max-h-[1000px]' : 'max-h-0'"
          >
            <Filter class="mx-auto w-fit" />
          </div>
          <InfinityScroll class="w-full" :is-triggered="isPaginate" @on-load="handleLoadData">
            <Card :mentor="ment" class="mt-10" v-for="(ment, index) in mentors" :key="index" />
          </InfinityScroll>
          <div v-if="!isPaginate" class="flex justify-center">
            <Button
              :onclick="() => (isPaginate = true)"
              :text="`Показать еще ${totalCount - mentors.length} ментора`"
              class="w-[250px] h-[40px] font-medium text-sm leading-4 mt-[100px] bg-white border-[#108A00] !text-black hover:!bg-[#E9E9E9]"
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<style></style>
