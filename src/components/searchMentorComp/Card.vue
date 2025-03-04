<script setup lang='ts'>
import MacBook from '../../assets/MacBook.png'
import Button from '../ui/Button.vue';
import { computed } from 'vue';
import Chip from '../../../src/components/ui/Chip.vue';
import { useRouter } from 'vue-router'
import { IMentor } from '@/api/services';

interface IProps{
  mentor: IMentor
}

const props = defineProps<IProps>()
const router = useRouter()

const chipList = computed(() => {
  return [...props.mentor.spheres, ...props.mentor.skills, ...props.mentor.companies]
})

</script>
<template>
  <div class="border rounded-3xl laptop:w-[704px] w-[95vw] py-3">
    <div class=" p-[24px]">
      <div class="flex gap-5">
        <div :style="{ backgroundImage: `url(${props.mentor.avatar})` }" class="w-[92px] h-[92px] bg-center bg-cover"></div>
        <div class="flex flex-col gap-[4px]">
          <h5 class=" font-semibold text-lg leading-6">{{ props.mentor.fullname }}</h5>
          <p class=" font-normal text-sm leading-[19px] text-[#6F766C]">{{ props.mentor.position }}</p>
          <div class="flex gap-[4px]">
            <img :src="MacBook" class=" w-5 h-5" />
            <p class=" font-semibold text-base leading-5">{{ props.mentor.lessonCount }}</p>
            <p class=" font-normal text-sm leading-5 text-[#6F766C]">Занятия проведено</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-[4px] mt-5">
        <Chip v-for="(item, index) in chipList" :key="index" :text="item" />
      </div>
      <div class="py-5">
        <p class="flex flex-col gap-2 font-normal text-sm leading-5">
          <p v-for="item in props.mentor.help">- {{ item }}</p>
        </p>
      </div>
    </div>
    <div class="border-t flex justify-center w-full px-5">
      <div class="flex mt-[20px] flex-col w-full tablet:flex-row">
        <div class="flex flex-col justify-center w-full">
          <p class="font-medium text-sm leading-[17px] text-center">от {{ props.mentor.price }}₽ / час</p>
          <Button @click="() => router.push(`/account-mentor/${props.mentor.id}`)" text="Подробнее" class="bg-white !text-black border-black w-full h-[40px] font-medium text-sm leading-4 mt-5 hover:!bg-[#E9E9E9]"/>
        </div>
      </div>
    </div>
  </div>
</template>
