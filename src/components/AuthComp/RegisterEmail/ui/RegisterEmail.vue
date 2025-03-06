<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import strelka from "@/assets/strelka.svg";
import InputText from "primevue/inputtext";
import { useRegisterFormStore } from "../model/pinia/useRegisterFormStore";

import { useAuthStageStore } from "@/shared/store/registerStore";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { register } from "@/api/services";
import Checkbox from "primevue/checkbox";
import { useAuthStore } from "@/shared/store/auth";

const stageStore = useAuthStageStore();

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const registerForm = useRegisterFormStore();
const { email, confirmPassword, errorEmail, errorNickname, nickname, errors, password, isErrorAuth, isRememberMy } =
  storeToRefs(registerForm);

const handleRegister = async () => {
  registerForm.nicknameValidator();
  registerForm.passwordValidator();
  registerForm.emailValidator();
  registerForm.isValidator();

  if (!isErrorAuth.value) {
    const auth = await register(email.value, password.value, nickname.value, (route.params as any).role);

    if (!auth.isError && auth.data !== null) {
      authStore.setAuthData(auth.data);

      if (isRememberMy.value) {
        authStore.saveAuthData();
      }

      (route.params as any).role === "student" ? router.push("/") : router.push("/edit-mentor");
    } else {
      errors.value = auth.message;
      isErrorAuth.value = true;
    }
  }
};
</script>

<template>
  <div class="border rounded-[10px] w-[80%] h-fit laptop:w-[512px] mt-[70px] mx-auto shadow-xl p-9">
    <div class="flex">
      <img :src="strelka" />
      <p @click="router.push('/')" class="font-normal text-base leading-[19px] text-[#108A00] ml-1">Назад</p>
    </div>
    <h3 class="font-semibold text-xl leading-[24px] mt-[40px]">Зарегистрируйтесь по почте</h3>
    <div class="flex flex-col gap-1 mt-5">
      <div class="card flex justify-content-center mt-4">
        <InputText
          :class="isErrorAuth && 'cls-error'"
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          :placeholder="errorNickname === '' ? 'Имя Фамилия' : errorNickname"
          v-model="nickname"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          :class="isErrorAuth && 'cls-error'"
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          :placeholder="errorEmail === '' ? 'Введите почту' : errorEmail"
          v-model="email"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          :class="isErrorAuth && 'cls-error'"
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          :placeholder="'Придумайте пароль'"
          v-model="password"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          :class="isErrorAuth && 'cls-error'"
          placeholder="Повторите пароль"
          v-model="confirmPassword"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <div class="flex items-center gap-2">
          <Checkbox class="border" :value="true" v-model="isRememberMy" inputId="remembermy" name="remembermy" />
          <label for="ingredient1"> Запомнить меня? </label>
        </div>
      </div>
      <p class="text-red-600" v-if="errors !== ''">{{ errors }}</p>
    </div>
    <Button
      @click="handleRegister"
      text="Далее"
      class="w-full laptop:w-[440px] h-[54px] font-semibold text-base leading-[19px] mt-5"
    />
    <div class="flex justify-between items-center">
      <p class="font-light text-xs leading-[14px] text-[#6F766C] mt-5">
        Регистрируясь в сервисе, принимаю условия соглашения и
        <span class="underline-offset-1 underline cursor-pointer">политики конфиденциальности</span>
      </p>

      <p @click="stageStore.setStage(0)" class="font-light text-sm leading-[14px] text-[#6F766C] mt-5">Войти</p>
    </div>
  </div>
</template>
<style>
.cls-error {
  border: 1px solid red;
}
.cls-error::placeholder {
  color: red;
}
</style>
