import { ref } from "vue";
import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", () => {
  const email = ref("");
  const hash = ref("");
  const secondHash = ref("");
  const stage = ref(0);

  const setEmail = (val: string) => (email.value = val);
  const setHash = (val: string) => (hash.value = val);
  const setSecondHash = (val: string) => (secondHash.value = val);
  const setStage = (val: number) => (stage.value = val);

  return {
    email,
    hash,
    secondHash,
    stage,
    setEmail,
    setHash,
    setSecondHash,
    setStage,
  };
});
