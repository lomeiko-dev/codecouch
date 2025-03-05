<script setup lang="ts">
import { ref } from "vue";

import { Code } from "@/features/Code";
import Button from "@/components/ui/Button.vue";
import strelka from "../../../../assets/strelka.svg";
import InputText from "primevue/inputtext";
import { useAuthStageStore } from "@/shared/store/registerStore";

const stageStore = useAuthStageStore();

const isFirstStage = ref(true);

const handlePasswordRecovery = async () => {

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
