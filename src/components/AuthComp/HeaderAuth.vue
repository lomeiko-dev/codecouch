<script setup lang='ts'>
import { useRouter } from 'vue-router';
import logo from '../../assets/HeaderLogo.svg'

const route = useRouter()
  
</script>
<template>
  <div @click="route.push('/')" class=" flex py-4 justify-around flex-col px-10">
    <img :src="logo" class=" w-[338px] h-[40px] md:w-[220px] "/>
  </div>
</template>
