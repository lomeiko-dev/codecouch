<script setup lang="ts">
import { IMentor } from "@/api/services";

interface IProps extends Pick<IMentor, "workExperience"> {}

const props = defineProps<IProps>();
</script>
<template>
  <div class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div>
      <h2 class="font-normal text-2xl leading-9">Резюме</h2>
      <div class="flex gap-10">
        <pre class="w-full break-words whitespace-pre-wrap font-normal text-sm leading-[23px] flex flex-col gap-9 mt-5"
          >{{ props.workExperience }}
        </pre>
      </div>
    </div>
  </div>
</template>
