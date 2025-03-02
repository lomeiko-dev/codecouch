<script setup lang="ts">
import Search from "../components/Search.vue";
import Chips from "../components/Chips.vue";
import Mentors from "../components/Mentors.vue";
import Advertising from "../components/Advertising.vue";
import Statistics from "../components/Statistics.vue";
import Manual from "../components/Manual.vue";
import FreeTimes from "../components/FreeTimes.vue";
import Criteria from "../components/Criteria.vue";
import Categories from "../components/Categories.vue";
import Reviews from '../components/Reviews.vue'
import Partners from "../components/Partners.vue";
import Panels from "../components/Panels.vue";
import Contacts from "../components/Contacts.vue";
import MainLayout from "../components/MainLayout.vue";
import TextAnimation from "../components/TextAnimation.vue";
import { useWindowSize } from "@vueuse/core";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const { width } = useWindowSize();

const route = useRoute();

const scrollToAnchor = (anchorId: string) => {
  const element = document.getElementById(anchorId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  if (route.hash) {
    scrollToAnchor(route.hash.slice(1));
  }
});

watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      scrollToAnchor(newHash.slice(1));
    }
  }
);
</script>
<template>
  <MainLayout>
    <div class="flex justify-center mt-28">
      <h1 class="text-4xl tablet:text-6xl font-black w-[1098px] mx-auto text-center">
        <TextAnimation /> вместе <br />
        с наставником {{ width > 600 ? "в формате 1 на 1" : "" }}
      </h1>
    </div>
    <div>
      <div class="flex justify-center mt-10">
        <p class="w-[779px] h-14 text-[18px] mx-auto text-center">
          Улучшайте свои навыки через персональные занятия с опытными наставниками, которых тебе поможет подобрать
          нейросеть
        </p>
      </div>
    </div>
    <Search />
    <Chips />
    <Mentors/>
    <Advertising />
    <Statistics />
    <Manual />
    <FreeTimes />
    <Criteria />
    <Categories class="hidden laptop:block" />
    <Reviews/>
    <Partners />
    <div id="questions">
      <Panels />
    </div>
    <Contacts />
  </MainLayout>
</template>
