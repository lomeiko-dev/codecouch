<script setup lang="ts">
import AccountCard from "../components/AccountMentorComp/AccountCard.vue";
import ListAccount from "../components/AccountMentorComp/ListAccount.vue";
import AccountResume from "../components/AccountMentorComp/AccountResume.vue";
import B2B from "../components/AccountMentorComp/B2B.vue";
import ReviewsMentor from "../components/AccountMentorComp/ReviewsMentor.vue";
import MainLayout from "@/components/MainLayout.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { getMentorById, IMentor } from "@/api/services";
import { IFeedback, getFeedbacksByMentorId } from "@/api/services/feedback";

const route = useRoute();
const id = computed(() => route.params.id || '');
const mentor = ref<IMentor | null>(null)
const feedbacks = ref<IFeedback[]>([])

onMounted(async () => {
  const result = await  getMentorById(id.value as string)
  const resultFeedbacks = await getFeedbacksByMentorId(id.value as string)
  mentor.value = result.data
  feedbacks.value = resultFeedbacks.data
})
</script>

<template>
  <MainLayout v-if="mentor">
    <AccountCard v-bind='mentor'/>
    <ListAccount v-bind='mentor'/>
    <AccountResume v-bind='mentor'/>
    <B2B v-bind="mentor"/>
    <ReviewsMentor :feedbacks="feedbacks"/>
  </MainLayout>
</template>
