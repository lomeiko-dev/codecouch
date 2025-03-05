<script setup lang="ts">
import {AuthProvider} from "./providers/auth";
</script>

<template>
  <AuthProvider>
    <RouterView />
  </AuthProvider>
</template>
