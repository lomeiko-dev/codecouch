<script setup lang="ts">
import AccountCard from "../components/AccountMentorComp/AccountCard.vue";
import ListAccount from "../components/AccountMentorComp/ListAccount.vue";
import AccountResume from "../components/AccountMentorComp/AccountResume.vue";
import Test from "../components/AccountMentorComp/Test.vue";
import B2B from "../components/AccountMentorComp/B2B.vue";
import ReviewsMentor from "../components/AccountMentorComp/ReviewsMentor.vue";
import MainLayout from "@/components/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <AccountCard />
    <ListAccount />
    <AccountResume />
    <!-- <applicationContent/> -->
    <Test />
    <B2B />
    <ReviewsMentor />
  </MainLayout>
</template>
