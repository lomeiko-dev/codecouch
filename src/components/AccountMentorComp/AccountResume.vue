<script setup lang='ts'>
import { IMentor } from '@/api/services';


interface IProps extends Pick<IMentor, 'workExperience'> {}

const props = defineProps<IProps>()

</script>
<template>
  <div class=" w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div>
      <h2 class=" font-normal text-2xl leading-9">Резюме</h2>
      <div class="flex gap-10">
        <ul class="font-normal text-sm leading-[23px] flex flex-col gap-9 mt-5">
          <li class="hover:underline cursor-pointer" v-for="work in props.workExperience">{{ work.period }} {{ work.company }} - {{ work.description }} {{ work.role }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
