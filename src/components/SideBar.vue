<script setup lang="ts">
import menu from "../assets/Menu.svg";
import { useRouter } from "vue-router";
interface Props {
  isOpen: boolean;
}

interface Emits {
  (emit: "update:isOpen", value: boolean): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const router = useRouter();
</script>
<template>
  <div
    class="h-[170px] w-screen flex flex-col gap-3 items-end fixed top-0 right-0 duration-500 bg-white z-50 py-4 px-10"
    :class="props.isOpen ? ' translate-y-0' : ' translate-y-[-100%]'"
  >
    <inline-svg
      :src="menu"
      class="text-[#6F766C]"
      @click="emit('update:isOpen', false)"
    />
    <p @click="router.push('/search-mentor')">Наставники</p>
    <p @click="router.push('/auth-client')">Вход для ментора</p>
    <p @click="router.push('/becoming-mentor')">Как стать ментором</p>
  </div>
</template>
<style lang="scss"></style>
