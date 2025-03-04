<script setup lang="ts">
import Button from "./ui/Button.vue";
import AutoComplete from "primevue/autocomplete";
import magnifier from "../assets/Magnifier.svg";
import { computed, CSSProperties, ref } from "vue";
import { useWindowSize, watchDebounced } from "@vueuse/core";
import { useRouter } from "vue-router";
import {storeToRefs} from 'pinia'
import { useFilterSotre } from "@/shared/store/filterStore";

interface IProps {
  showButton?: boolean
}

const props = defineProps<IProps>()

const filterStore = useFilterSotre()
const {search} = storeToRefs(filterStore)
const router = useRouter()

watchDebounced(search, () => {
  filterStore.compileParams()
}, {debounce: 500})

const handleSearch = (e: any) => {
  let _items = ["python", "vue", "JS", "react", "TS", "Frontend"];

  suggestions.value = e.query
    ? _items.filter((item: string) => item.toLowerCase().includes(e.query.toLowerCase()))
    : _items;
};

const suggestions = ref<string[]>([]);
const { width } = useWindowSize();

const inputStyle = computed(() => {
  const baseStyle: CSSProperties = {
    height: '60px',
    paddingLeft: '50px'
  };

  if (props.showButton) {
    baseStyle.width = width.value > 768 ? '350px' : (width.value > 1440 ? '500px' : (width.value > 400 ? '350px' : '300px'));
  } else {
    
    baseStyle.width = width.value > 600 ? '500px' : '300px';
  }

  return baseStyle;
});

</script>
<template>
  <div class="flex justify-center flex-col tablet:flex-row items-center gap-5 mt-8">
    <div class="relative">
      <inline-svg :src="magnifier" class="text-[#6F766C] absolute top-[40%] left-[20px] z-40 size-4"></inline-svg>
      <AutoComplete
        v-model="search"
        dropdown
        :suggestions="suggestions"
        @complete="handleSearch"
        :input-style="inputStyle"
        class="border rounded-md border-figma-green"
        placeholder="Навык или профессия"
      />
    </div>
    <div v-if="props.showButton">
      <Button :onclick="() => router.push('/search-mentor')"  text="Найти наставника" class="py[17px] px-[52px] w-[281px] h-[60px]" />
    </div>
  </div>
</template>
<style></style>
