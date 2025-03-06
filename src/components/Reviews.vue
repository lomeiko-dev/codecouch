<script setup lang="ts">
import Review from "./ui/Review.vue";
import Button from "./ui/Button.vue";
import { ref } from "vue";
import { getFeedbackList, IFeedback } from "@/api/services/feedback";
import InfinityScroll from "./ui/InfinityScroll.vue";
import { useRouter } from "vue-router";

const LIMIT = 4;

const reviewList = ref<IFeedback[] | null>(null);
const isPagination = ref<boolean>(false);
const page = ref<number>(1);
const killedPagination = ref<boolean>(false);

const router = useRouter();

const loadData = async () => {
  const result = (await getFeedbackList(page.value, LIMIT)).data;

  if (result.length === 0) {
    killedPagination.value = true;
    return;
  }

  reviewList.value = [...(reviewList.value || []), ...result];
  page.value++;
};
</script>
<template>
  <div class="max-w-[1200px] mx-auto">
    <h3 class="font-semibold text-4xl leading-[46px] text-center">Отзывы наших учеников</h3>
    <InfinityScroll
      is-send-first-request
      :is-triggered="isPagination && !killedPagination"
      class="flex flex-wrap items-center justify-center gap-[72px] mx-auto w-fit mt-[50px]"
      @on-load="loadData"
    >
      <Review
        v-for="(item, index) in reviewList"
        :key="index"
        :img="item.avatar"
        :name="item.fullname"
        :mentor="item.mentorName"
        :text="item.comment"
      />
    </InfinityScroll>
    <div class="flex justify-center mt-[50px] gap-[10px]">
      <Button :onclick="() => router.push('/search-mentor')" class="p-5" text="Подобрать ментора" />
      <Button
        v-if="!isPagination"
        :onclick="
          () => {
            isPagination = true;
          }
        "
        text="Посмтореть еще отзывы"
        class="bg-white !text-black hover:!bg-[#E9E9E9] duration-300 p-5"
      />
    </div>
  </div>
</template>
<style></style>
