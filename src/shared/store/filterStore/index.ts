import { ref } from "vue";
import { defineStore } from "pinia";

export const useFilterSotre = defineStore("filter", () => {
  const filterArguments = ref<Record<string, string>>({});
  const filterString = ref("");
  const search = ref("");

  const editArgument = (key: string, value: string) => {
    filterArguments.value[key] = value;
  };

  return {
    filterArguments,
    search,
    filterString,
    editArgument,
  };
});
