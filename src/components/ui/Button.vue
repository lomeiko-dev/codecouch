<script setup lang='ts'>
interface Props {
  text: string
}

const props = defineProps<Props>()

</script>
<template>
   <button class="border text-white bg-figma-green rounded-[10px]  hover:bg-black duration-300 font-semibold leanding-[22px]">{{ props.text }}</button>
</template>
<style lang='scss'>
    
</style>