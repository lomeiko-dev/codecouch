<script setup lang="ts">
import { ref } from "vue";

import Button from "@/components/ui/Button.vue";
import strelka from "@/assets/strelka.svg";
import InputText from "primevue/inputtext";

import { universalCode } from "../model";

import { AxiosError } from "axios";

import { useRouter } from "vue-router";

import { useRegisterStore } from "@/shared/store/registerStore";
import { storeToRefs } from "pinia";

const registerStore = useRegisterStore();
const { email, hash } = storeToRefs(registerStore);

const props = defineProps<{ url: string }>();

const router = useRouter();

const code = ref("");

const isErrorAuth = ref(false);

const handler = async () => {
  try {
    const { data, code: statusCode } = await universalCode(
      props.url,
      email.value,
      hash.value,
      +code.value
    );

    if (!data) {
      console.error("Не удалось войти. Статус:", statusCode);
      return;
    }

    if (statusCode === 401 || statusCode === 405 || statusCode === 500) {
      isErrorAuth.value = true;
      return;
    }

    if (data.token) {
      router.push("/");
    } else {
      registerStore.setSecondHash(data.hash ?? "");
      console.log(registerStore.stage);
      registerStore.setStage(4);
      console.log(registerStore.stage);
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
    class="border rounded-[10px] w-[80vw] h-fit laptop:w-[512px] mt-[70px] mx-auto shadow-xl p-9"
  >
    <div class="flex">
      <img :src="strelka" />
      <p class="font-normal text-base leading-[19px] text-[#108A00] ml-1">
        Назад
      </p>
    </div>
    <h3 class="font-semibold text-xl leading-[24px] mt-[40px]">
      Введите 6 значный код
    </h3>
    <div class="flex flex-col gap-1 mt-5">
      <div class="card flex justify-content-center mt-4">
        <InputText
          id="username"
          class="border rounded-[10px] px-3 w-full h-[54px]"
          placeholder="Код"
          v-model="code"
        />
      </div>
    </div>
    <Button
      @click="handler"
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
</template>
