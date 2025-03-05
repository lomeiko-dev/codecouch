<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import strelka from "@/assets/strelka.svg";
import InputText from "primevue/inputtext";
import { useRouter } from "vue-router";

import { useAuthStageStore } from "@/shared/store/registerStore";
import { useLoginFormStore } from "../model/useLoginFormStore";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/shared/store/auth";
import Checkbox from "primevue/checkbox";
import { login } from "@/api/services";

const stageStore = useAuthStageStore();
const authStore = useAuthStore()
const loginFormStore = useLoginFormStore()
const {email, errors, isErrorAuth, password, isRememberMy} = storeToRefs(loginFormStore)

const router = useRouter();

const handleLogin = async () => {
  loginFormStore.isValidator()

  if(!isErrorAuth.value){
    const auth = await login(email.value, password.value)

    if (!auth.isError && auth.data !== null) {
      authStore.setAuthData(auth.data)

      if(isRememberMy.value){
        authStore.saveAuthData()
      }

      router.push('/')
      loginFormStore.clearField();
    }
    else{
      errors.value = auth.message
      isErrorAuth.value = true;
    }
  }
};
</script>

<template>
  <div
    class="border rounded-[10px] w-[80%] h-fit laptop:w-[512px] mt-[70px] mx-auto shadow-xl p-9"
  >
    <div class="flex">
      <img :src="strelka" />
      <p @click="router.push('/')" class="font-normal text-base leading-[19px] text-[#108A00] ml-1">
        Назад
      </p>
    </div>
    <h3 class="font-semibold text-xl leading-[24px] mt-[40px]">
      Войдите по почте
    </h3>
    <div class="flex flex-col gap-1 mt-5">
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Введите почту"
          :class="isErrorAuth && 'cls-error'"
          v-model="email"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Введите пароль"
          :class="isErrorAuth && 'cls-error'"
          v-model="password"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <div class="flex items-center gap-2">
          <Checkbox
           class="border" :value="true" v-model="isRememberMy" inputId="remembermy" name="remembermy"/>
          <label for="ingredient1"> Запомнить меня? </label>
        </div>
      </div>
      <p v-if="errors !== ''" class="text-red-600">{{ errors }}</p>
    </div>
    <Button
      @click="handleLogin"
      text="Далее"
      class="w-full laptop:w-[440px] h-[54px] font-semibold text-base leading-[19px] mt-5"
    />
    <div class="flex justify-between items-center">
      <p class="font-light text-xs leading-[14px] text-[#6F766C] mt-5">
        Регистрируясь в сервисе, принимаю условия соглашения и
        <span class="underline-offset-1 underline cursor-pointer"
          >политики конфиденциальности</span
        >
      </p>
      <p
        @click="stageStore.setStage(1)"
        class="font-light text-sm leading-[14px] text-[#6F766C] mt-5"
      >
        Зарегистрироваться
      </p>
    </div>
  </div>
</template>
