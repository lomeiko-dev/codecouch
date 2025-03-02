<script setup lang='ts'>
import { ref } from 'vue';
import Chip from './ui/Chip.vue'

const selectedChips = ref<string[]>([]) 
</script>

<template>
  <div class="flex gap-2 justify-center mt-14 flex-wrap ">
    <Chip text="Python" @click="selectedChips.push('Python')"/>
    <Chip text="Java"/>
    <Chip text="JavaScript"/>
    <Chip text="C#"/>
    <Chip text="C++"/>
    <Chip text="React"/>
    <Chip text="Mobile"/>
    <Chip text="UX/UI"/>
    <Chip text="Data Science"/>
    <Chip text="Team Lead"/>
    <Chip text="Product Management"/>
    <Chip text="1C"/>
  </div>
</template>

<style>
  
</style>