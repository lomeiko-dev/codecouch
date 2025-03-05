<script setup lang="ts">
import { useAuthStore } from "@/shared/store/auth";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const authStore = useAuthStore();
const { authData } = storeToRefs(authStore);

onMounted(() => {
  if (authData.value === null) {
    authStore.loadAuthData();
  }
});
</script>

<template>
  <slot />
</template>
