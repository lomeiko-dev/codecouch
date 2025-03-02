<script setup lang='ts'>
interface Props {
  text: string
}

const props = defineProps<Props>()

</script>
<template>
   <div class="border boreder-[#d5e0d5] bg-[#f4f5f6] rounded-[10px] h-[25px] px-2 text-black flex justify-center cursor-pointer w-fit">{{ props.text }}</div>
</template>
