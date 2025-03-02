<script setup lang="ts">
import { ref } from "vue";
import { Code } from "@/features/Code";
import Button from "@/components/ui/Button.vue";
import strelka from "@/assets/strelka.svg";
import InputText from "primevue/inputtext";
import { registerUserFirstStage } from "@/api/services";
// import { useRouter } from "vue-router";
import { AxiosError } from "axios";

import { useRegisterStore } from "@/shared/store/registerStore";
import { useRouter } from "vue-router";

const registerStore = useRegisterStore();

const router = useRouter();

// const router = useRouter();

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const isErrorAuth = ref(false);

const isFirstStage = ref(true);

const handleRegister = async () => {
  // поле пароля и подтверждения пароля не совпадают
  // TODO надо сделать стили при ошибке подобного плана
  if (password.value !== confirmPassword.value) {
    console.log("пароль не совпадает");
    isErrorAuth.value = true;
    return;
  }

  try {
    const { data, code } = await registerUserFirstStage(
      email.value,
      password.value
    );

    if (!data) {
      console.error("Не удалось войти. Статус:", code);
      return;
    }

    registerStore.setEmail(data.email);
    registerStore.setHash(data.hash);
    // registerStore.setStage(2);
    isFirstStage.value = false;

    if (code === 401 || code === 405 || code === 500) {
      isErrorAuth.value = true;
      return;
    }
  } catch (error: any) {
    console.error("Ошибка входа:", error);

    if (error instanceof AxiosError && error.response) {
      console.error("Статус ошибки:", error.response.status);
    }
  }
};
</script>

<template>
  <div
    v-if="isFirstStage"
    class="border rounded-[10px] w-[80%] h-fit laptop:w-[512px] mt-[70px] mx-auto shadow-xl p-9"
  >
    <div class="flex">
      <img :src="strelka" />
      <p @click="router.push('/')" class="font-normal text-base leading-[19px] text-[#108A00] ml-1">
        Назад
      </p>
    </div>
    <h3 class="font-semibold text-xl leading-[24px] mt-[40px]">
      Зарегистрируйтесь по почте
    </h3>
    <div class="flex flex-col gap-1 mt-5">
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Введите почту"
          v-model="email"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Придумайте пароль"
          v-model="password"
        />
      </div>
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Повторите пароль"
          v-model="confirmPassword"
        />
      </div>
    </div>
    <Button
      @click="handleRegister"
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
        @click="registerStore.setStage(0)"
        class="font-light text-sm leading-[14px] text-[#6F766C] mt-5"
      >
        Войти
      </p>
    </div>
  </div>
  <Code url="/sing-up/confirm" v-else />
</template>
