<script setup lang='ts'>
import Malov from '../../assets/malov.png'
import MacBook from '../../assets/MacBook.png'
import Button from '../ui/Button.vue';
import { ref } from 'vue';
import Chip from '../../../src/components/ui/Chip.vue';
import { useRouter } from 'vue-router'

const router = useRouter()


const chipList = ref(['Управление командой', 'Customer experience', 'Системная аналитика', 'Процессы разработки и тестирования', 'HR: мотивация сотрудников', 'Аналитика', 'Стартапы: запуск', 'Публичные выступления', 'Jira', 'Продуктовая стратегия', 'Customer experience', 'HR: формирование команд'])

</script>
<template>
  <div class="border rounded-3xl laptop:w-[704px] w-[95vw] py-3">
    <div class=" p-[24px]">
      <div class="flex gap-5">
        <img :src="Malov" class="w-[92px] h-[92px]" />
        <div class="flex flex-col gap-[4px]">
          <h5 class=" font-semibold text-lg leading-6">Владимир Малов</h5>
          <p class=" font-normal text-sm leading-[19px] text-[#6F766C]">CTO — U:tech by Utkonos</p>
          <div class="flex gap-[4px]">
            <img :src="MacBook" class=" w-5 h-5" />
            <p class=" font-semibold text-base leading-5">4</p>
            <p class=" font-normal text-sm leading-5 text-[#6F766C]">Занятия проведено</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-[4px] mt-5">
        <Chip v-for="(item, index) in chipList" :key="index" :text="item" />
      </div>
      <div class="py-5">
        <p class=" font-normal text-sm leading-5">– Присоединился к команде Утконоса в 2020, отвечаю за направление клиентских сервисов, команда более 100 человек.<br>– В OZON занимался реферальной программой в качестве продакта реферальной программы.</p>
      </div>
    </div>
    <div class="border-t flex justify-center">
      <div class="flex gap-[12px] mt-[70px] flex-col tablet:flex-row">
        <div class="flex flex-col justify-center">
          <p class="font-medium text-sm leading-[17px] text-center">от 3000₽ / час</p>
          <Button text="Подробнее" class="bg-white !text-black border-black w-[225px] h-[40px] font-medium text-sm leading-4 mt-5 hover:!bg-[#E9E9E9]" @click="router.push('/account-mentor')"/>
        </div>
        <div class="flex flex-col justify-center">
          <p class="font-normal text-[13px] leading-[18px] text-center text-[#108A00]">Получить бесплатную консультацию</p>
          <Button text="Связаться с ментором" class="w-[250px] h-[40px] font-medium text-sm leading-4 mt-5"/>
        </div>
      </div>
    </div>
  </div>
</template>
