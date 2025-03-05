import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegisterFormStore = defineStore("registerForm", () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const confirmPassword = ref<string>("");
  const nickname = ref<string>("");
  const isRememberMy = ref<boolean>(false);

  const errors = ref<string>("");
  const errorEmail = ref<string>("");
  const errorNickname = ref<string>("");

  const isErrorAuth = ref<boolean>(false);

  const nicknameValidator = () => {
    errorNickname.value = "";

    if (nickname.value === "") {
      errorNickname.value = "Имя не может быть пустым";
      return;
    }
  };

  const passwordValidator = () => {
    errors.value = "";

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password.value === "") {
        errors.value = "Пароль не может быть пустым";
      return;
    }

    if (!regex.test(password.value)) {
        errors.value =
        "Пароль должен содержать 1 строчная буква, 1 заглавная буква, 1 цифру, 1 специальный символ (@$!%*?&). Минимум 8 символов";
      return;
    }

    if (password.value !== confirmPassword.value) {
        errors.value = "Пароли не совпадают";
      return;
    }
  };

  const emailValidator = () => {
    errorEmail.value = "";

    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (email.value === "") {
      errorEmail.value = "Укажите почту";
      return;
    }

    if (!regex.test(email.value)) {
      errorEmail.value = "Почта не валидна";
      return;
    }
  };

  const isValidator = () => {
    isErrorAuth.value = false;
    isErrorAuth.value = errorEmail.value !== "" || errors.value !== "" || errorNickname.value !== "";
  };

  const clearField = () => {
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    nickname.value = "";
    errors.value = "";
    errorEmail.value = "";
    errorNickname.value = "";
    isRememberMy.value = false;
    isErrorAuth.value = false;
  }

  return {
    email,
    password,
    nickname,
    confirmPassword,
    errors,
    errorEmail,
    isErrorAuth,
    errorNickname,
    isRememberMy,
    clearField,
    passwordValidator,
    emailValidator,
    isValidator,
    nicknameValidator,
  };
});
