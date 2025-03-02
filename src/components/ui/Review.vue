<script setup lang="ts">
interface Props {
  img: string;
  name: string;
  mentor: string;
  text: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div class="flex flex-col gap-3 border max-w-[500px] min-h-[314px] rounded-[10px] px-[65px] pb-[65px] h-full pt-8 shadow-xl">
    <div class="flex gap-5">
      <div class="w-16 h-16 min-w-16 rounded-full bg-cover bg-center" :style="{ backgroundImage: `url(${props.img})` }">
      </div>
      <div>
        <p class="font-semibold text-lg leanding-[22px]">{{ props.name }}</p>
        <p class="font-normal text-sm leanding-[20px]">ментор: {{ props.mentor }}</p>
      </div>
    </div>
    <div>
      <p class="font-normal text-sm leanding-[20px] mt-[50px] max-w-[345px]">{{ props.text }}</p>
    </div>
  </div>
</template>
<style></style>
