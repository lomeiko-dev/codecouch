<script setup lang="ts">
import { ref } from "vue";

import { Code } from "@/features/Code";
import Button from "@/components/ui/Button.vue";
import strelka from "../../../../assets/strelka.svg";
import InputText from "primevue/inputtext";

import { passwordRecoveryFirstStage } from "@/api/services";
import { AxiosError } from "axios";

import { useRegisterStore } from "@/shared/store/registerStore";

const registerStore = useRegisterStore();

const email = ref("");

const isErrorAuth = ref(false);

const isFirstStage = ref(true);

const handlePasswordRecovery = async () => {
  try {
    const { data, code } = await passwordRecoveryFirstStage(email.value);

    if (!data) {
      console.error("Не удалось войти. Статус:", code);
      return;
    }

    if (code === 401 || code === 405 || code === 500) {
      isErrorAuth.value = true;
      return;
    }

    registerStore.setEmail(data.email);
    registerStore.setHash(data.hash);
    // registerStore.setStage(2);
    isFirstStage.value = false;
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
    class="border rounded-[10px] w-[80vw] h-fit laptop:w-[512px] mt-[70px] mx-auto shadow-xl p-9"
  >
    <div class="flex">
      <img :src="strelka" />
      <p class="font-normal text-base leading-[19px] text-[#108A00] ml-1">
        Назад
      </p>
    </div>
    <h3 class="font-semibold text-xl leading-[24px] mt-[40px]">
      Забыли пароль
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
    </div>
    <Button
      @click="handlePasswordRecovery"
      text="Далее"
      class="w-full laptop:w-[440px] h-[54px] font-semibold text-base leading-[19px] mt-5"
    />
    <p class="font-light text-xs leading-[14px] text-[#6F766C] mt-5">
      Регистрируясь в сервисе, принимаю условия соглашения и
      <span class="underline-offset-1 underline cursor-pointer"
        >политики конфиденциальности</span
      >
    </p>
  </div>
  <Code url="/recover-pass/confirm" v-else />
</template>
