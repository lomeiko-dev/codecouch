import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginFormStore = defineStore("loginForm", () => {
  const email = ref("");
  const password = ref("");
  const isRememberMy = ref<boolean>(false);

  const errors = ref("");
  const isErrorAuth = ref(false);

  const isValidator = () => {
    errors.value = "";
    isErrorAuth.value = false;

    if (email.value === "" || password.value === "") {
        errors.value = "Пожалуйста введите почту и пароль";
      isErrorAuth.value = true;
      return;
    }
  };

  const clearField = () => {
    email.value = "";
    password.value = "";
    errors.value = "";
    isErrorAuth.value = false;
    isRememberMy.value = false;
  }

  return {
    email,
    password,
    errors,
    isErrorAuth,
    isRememberMy,
    isValidator,
    clearField,
  };
});
