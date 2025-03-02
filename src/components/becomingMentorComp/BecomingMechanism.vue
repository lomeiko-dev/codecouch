<script setup lang='ts'>
import { ref } from 'vue';
import MechanismComp from './MechanismComp.vue'
import Mechanism1 from '../../assets/Mechanism1.svg'
import Mechanism2 from '../../assets/Mechanism2.svg'
import Mechanism3 from '../../assets/Mechanism3.svg'
import Mechanism4 from '../../assets/Mechanism4.svg'
import Mechanism5 from '../../assets/Mechanism5.svg'
import Mechanism6 from '../../assets/Mechanism6.svg'

const mechanismList = ref([
  {
    img: Mechanism1,
    title: "Свободный график",
    text:  "Вы сами выбираете в какое время вам удобнее проводить уроки"
  },
  {
    img: Mechanism2,
    title: "Мотивированные ученики",
    text:  "Занятия проходят только с теми, кто сам хочет развиваться и платить за своё развитие"
  },
  {
    img: Mechanism3,
    title: "Дополнительный доход",
    text:  "Монетизируйте свои знания, опыт и навыки за счёт почасовой ставки и удобный выплат"
  },
  {
    img: Mechanism4,
    title: "Собственный рост",
    text:  "Наставничество — процесс, во время которого вы сами развиваетесь"
  },
  {
    img: Mechanism5,
    title: "Поддержка сервиса",
    text:  "Мы помогаем сформировать план занятий и решаем любые возникающие вопросы"
  },
  {
    img: Mechanism6,
    title: "Количество студентов",
    text:  "Вы сами выбираете, сколько человек хотите вести, исходя из свободного времении"
  },
])
  
</script>
<template>
  <h2 class=" font-semibold text-4xl leading-[44px] flex laptop:ml-[90px] ml-3 mt-[150px]">Как устроено менторство?</h2>
  <div class="grid gap-20 grid-cols-1 tablet:grid-cols-2  laptop:grid-cols-3 grid-rows-1 tablet:grid-rows-2 mx-auto w-fit mt-[100px]">
    <MechanismComp v-for="(item, index) in mechanismList" :key="index" :img="item.img" :title="item.title" :text="item.text"/>
  </div>
</template>
