<script setup lang='ts'>
import MacBook from '../assets/MacBook.png'
import Student from '../assets/Student.png'
import Smile from '../assets/Smile.png'
import { onMounted, ref } from 'vue'
import { getStats, IStats } from '@/api/services/stats'

const stats = ref<IStats>({lessonCount: 0, studentCount: 0, studentReturned: 0})

onMounted(async () => {
  stats.value = await getStats()
})

</script>
<template>
  <div class=" bg-[#E7FFE6] py-6 mt-[70px] w-screen ">
    <div class="laptop:w-[80vw] flex justify-between laptop:items-center mx-auto flex-col laptop:flex-row gap-6 w-fit">
      <div class="flex items-center gap-3 flex-col laptop:flex-row">
        <img :src="MacBook" class="w-[44px] h-[44px]" />
        <div class="flex flex-col items-center laptop:items-start">
          <p class=" font-black text-5xl leading-[56px]">{{ stats.lessonCount > 100 && '1 00+' }}</p>
          <p class=" font-normal text-lg leading-[22px]">Занятий проведено</p>
        </div>
      </div>
      <div class="flex items-center gap-3 flex-col laptop:flex-row">
        <img :src="Student" class="w-[44px] h-[44px]" />
        <div class="flex flex-col items-center laptop:items-start">
          <p class=" font-black text-5xl leading-[56px]">{{ stats.studentCount > 60 && '60+' }}</p>
          <p class=" font-normal text-lg leading-[22px]">Учеников</p>
        </div>
      </div>
      <div class="flex items-center gap-3 flex-col laptop:flex-row">
        <img :src="Smile" class="w-[44px] h-[44px]" />
        <div class="flex flex-col items-center laptop:items-start">
          <p class=" font-black text-5xl leading-[56px]">{{ stats.studentReturned }}%</p>
          <p class=" font-normal text-lg leading-[22px]">Учеников возвращаются</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>