import { ref } from "vue";
import { defineStore } from "pinia";

const LOCAL_STORAGE_KEY = "filter";

export const useFilterSotre = defineStore("filter", () => {
  const filterArguments = ref<Record<string, string[]>>({});
  const filterString = ref("");
  const search = ref("");

  const isChecked = (key: string, value: string) => {
    return filterArguments.value[key]?.includes(value);
  };

  const editArgument = (key: string, value: string) => {
    let list = filterArguments.value[key];

    if (!list) {
      filterArguments.value[key] = [];
      list = filterArguments.value[key];
    }

    const itemIndex = list.findIndex((val) => val === value);

    if (itemIndex === -1) {
      list.push(value);
    } else {
      list.splice(itemIndex, 1);
    }
  };

  const saveFilterArguments = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filterArguments.value));
  };

  const loadFilterArguments = () => {
    const savedFilterArguments = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedFilterArguments) {
      filterArguments.value = JSON.parse(savedFilterArguments);
    }
  };

  const clearAll = () => {
    filterArguments.value = {};
    filterString.value = "";
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const compileParams = () => {
    filterString.value = Object.entries(filterArguments.value)
      .reduce((acc, [key, values]) => acc + values.reduce((acc, value) => acc + `${key}_like=${value}&`, ""), "")
      .slice(0, -1)
      .concat(search.value !== "" ? `&q=${search.value}` : "");
  };

  return {
    filterArguments,
    search,
    filterString,
    isChecked,
    editArgument,
    compileParams,
    loadFilterArguments,
    saveFilterArguments,
    clearAll,
  };
});
