<script setup lang="ts">
import { ref } from "vue";
import Chip from "primevue/chip";

interface Props {
  placeholder?: string;
}

const input = ref<string>("");
const props = defineProps<Props>();
const [modelValue] = defineModel<string[]>({ default: [], required: false });

const handleKeyUp = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    if (input.value !== "") {
      modelValue.value?.push(input.value);
      console.log(modelValue.value)
      input.value = "";
    }
  }
};
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-wrap gap-2">
      <Chip removable v-for="item in modelValue" :key="item">{{ item }}</Chip>
    </div>
    <input
      v-model="input"
      :placeholder="props.placeholder"
      class="border rounded-[10px] h-[38px] w-full px-3"
      @keyup="handleKeyUp"
    />
  </div>
</template>

<style lang="scss"></style>
