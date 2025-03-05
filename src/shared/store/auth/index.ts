import { IAuth } from "@/api/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const authData = ref<IAuth | null>(null);

  const setAuthData = (auth: IAuth) => {
    authData.value = auth;
  };

  const saveAuthData = () => {
    const jsonData = JSON.stringify(authData.value);
    localStorage.setItem("auth", jsonData);
  };

  const loadAuthData = () => {
    const jsonData = localStorage.getItem("auth");
    authData.value = jsonData ? JSON.parse(jsonData) : null;
  };

  return {
    authData,
    setAuthData,
    saveAuthData,
    loadAuthData,
  };
});
