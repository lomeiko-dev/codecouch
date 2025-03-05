import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStageStore = defineStore("authStage", () => {
  const stage = ref(0);

  const setStage = (val: number) => (stage.value = val);

  return {
    stage,
    setStage,
  };
});
