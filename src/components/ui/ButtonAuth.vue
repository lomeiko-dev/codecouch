<script setup lang='ts'>
interface Props {
  text: string
}

const props = defineProps<Props>()

</script>
<template>
   <button class="border text-black bg-white rounded-[10px] py-[10px] px-[16px]  hover:bg-[#E9E9E9] duration-300 font-semibold text-lg leanding-[22px]">{{ props.text }}</button>
</template>
<style lang='scss'>
    
</style>