<script setup lang="ts">
// import { ref } from "vue";
import HeaderAuth from "../components/AuthComp/HeaderAuth.vue";
import { LoginEmail } from "../components/AuthComp/LoginEmail";
import { RegisterEmail } from "@/components/AuthComp/RegisterEmail";
import { ResetPas } from "../components/AuthComp/ResetPas";
import NewPas from "../components/AuthComp/NewPas.vue";
import Footer from "../components/Footer.vue";

import { useRegisterStore } from "@/shared/store/registerStore";
import { storeToRefs } from "pinia";

const registerStore = useRegisterStore();
const { stage } = storeToRefs(registerStore);
</script>

<template>
  <HeaderAuth />
  <div class="h-[70vh]">
    <LoginEmail v-if="stage === 0" />
    <RegisterEmail v-if="stage === 1" />
    <ResetPas v-if="stage === 3" />
    <NewPas v-if="stage === 4" />
    <Footer />
  </div>
</template>
