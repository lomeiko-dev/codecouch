<script setup lang="ts">
// import { ref } from "vue";
import HeaderAuth from "../components/AuthComp/HeaderAuth.vue";
// import Login from "../components/AuthComp/Login.vue";
import { LoginEmail } from "../components/AuthComp/LoginEmail";
import { RegisterEmail } from "@/components/AuthComp/RegisterEmail";
import { ResetPas } from "../components/AuthComp/ResetPas";
// import Code from "../components/AuthComp/RegisterEmail/ui/Code.vue";
import NewPas from "../components/AuthComp/NewPas.vue";
import Footer from "../components/Footer.vue";

import { useRegisterStore } from "@/shared/store/registerStore";
import { storeToRefs } from "pinia";

const registerStore = useRegisterStore();
const { stage } = storeToRefs(registerStore);
</script>

<template>
  <HeaderAuth />
  <div>
    <div @click="registerStore.setStage(0)">login</div>
    <div @click="registerStore.setStage(1)">registration first stage</div>
    <div @click="registerStore.setStage(2)">registration second stage</div>
    <div @click="registerStore.setStage(3)">
      password что-то там, восстановление короче
    </div>
    <div @click="registerStore.setStage(4)">
      password что-то там, второй этап короче
    </div>
  </div>
  <div class="h-[70vh]">
    <!-- <Login /> -->

    <LoginEmail v-if="stage === 0" />
    <RegisterEmail v-if="stage === 1" />
    <!-- <Code v-if="stage === 2" /> -->
    <ResetPas v-if="stage === 3" />
    <NewPas v-if="stage === 4" />
    <Footer />
  </div>
</template>
