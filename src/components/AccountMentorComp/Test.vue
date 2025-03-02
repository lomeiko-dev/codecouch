<script setup lang="ts">
import videoImg from "../../assets/video.svg";
import Divider from "../ui/Divider.vue";
import Button from "../ui/Button.vue";
import { useRouter } from "vue-router";
import { getMentorServices, IMentorService } from "@/api/services";
import { onMounted, ref } from "vue";

const router = useRouter();

const isLoading = ref(true);
const mentorServices = ref<IMentorService>();

onMounted(async () => {
  const { data } = await getMentorServices("5", 1);
  mentorServices.value = data;
  isLoading.value = false;

  console.log(mentorServices.value);
});
</script>

<template>
  <div v-if="isLoading">Loading</div>

  <div
    class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl"
    v-else
    v-for="(item, index) in mentorServices?.providers"
    :key="index"
  >
    <div>
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-xl leading-[28px]">Тестовое собеседование</h4>
        <div class="flex">
          <img :src="videoImg" />
          <p class="font-normal text-base leading-6">
            1 встреча в Zoom – {{ item.consult_time }} мин
          </p>
        </div>
        <p class="font-normal text-xs leading-[19px]">Тестовое собеседование</p>
      </div>
      <div>
        <h4 class="font-bold text-xl leading-[28px] py-5">
          Встреча пройдет в формате интервью:
        </h4>
        <ul class="font-normal text-base leading-6 flex flex-col gap-2">
          <li>
            – проверим, соответствуют ли ваши hard и soft skills желаемой
            вакансии
          </li>
          <li>
            – пройдемся по кейсам: поймем, на каких из них стоит сделать акцент
          </li>
          <li>– поговорим про вашу мотивацию</li>
        </ul>
      </div>
    </div>
    <Divider class="mt-5" />
    <div class="flex flex-col gap-5">
      <h4 class="font-bold text-xl leading-[28px] mt-2">Результаты</h4>
      <p>В конце встречи подведем итоги:</p>
      <ul class="font-normal text-base leading-6 flex flex-col gap-2">
        <li>– поймем, как лучше презентовать себя;</li>
        <li>– какие проекты из резюме стоит раскрыть подробнее;</li>
        <li>– как грамотно рассказать о своей мотивации;</li>
        <li>– какие встречные вопросы стоит задать нанимающему менеджеру</li>
      </ul>
    </div>
    <h5 class="font-bold text-base leading-6 laptop:w-[614px] mt-5">
      Для тестового собеседования нужно будет прислать резюме и целевые
      вакансии, а также портфолио, если есть
    </h5>
    <p class="font-normal text-sm leading-5 opacity-60 mt-5">
      Стоимость консультации ( 1 час )
    </p>
    <h5 class="font-bold text-xl leading-[28px] mt-5">6000 ₽</h5>
    <Button
      text="Записаться"
      class="w-[90%] laptop:w-[384px] py-2 mt-5 font-medium text-sm leading-6"
      @click="router.push('/calendar')"
    />
  </div>
</template>
