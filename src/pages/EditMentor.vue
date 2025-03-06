<script setup lang="ts">
import MainLayout from "@/components/MainLayout.vue";
import EditContent from "../components/EditMentor/EditContent.vue";
import { onMounted, ref } from "vue";
import { useAuthStore } from "@/shared/store/auth";
import { storeToRefs } from "pinia";
import { getMentorById } from "@/api/services";

const isEdit = ref<boolean>(false);
const authStore = useAuthStore()
const {authData} = storeToRefs(authStore)

onMounted(async () => {
  const mentor = await getMentorById(authData.value?.userId || '-1', true);
  isEdit.value = mentor.data === null
})

</script>
<template>
  <MainLayout>
    <EditContent v-if="isEdit"/>
    <div class="text-center p-10 border rounded-[10px] w-[90vw] laptop:w-[1200px] mx-auto mt-[80px] shadow-2xl">
      <p>Вы уже являетесь ментором</p>
    </div>
  </MainLayout>
</template>
