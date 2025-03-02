<script setup lang='ts'>
import imgBecoming from '../../assets/becomingMentor.png'
import svgBecoming from '../../assets/BecomingSVG.svg'
import Button from '../ui/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>
<template>
  <h1 class=" font-black laptop:text-6xl tablet:text-4xl text-2xl leading-[87px] text-center mt-10 tablet:mt-[100px]">Становитесь наставником <span class="hidden laptop:inline">CodeCoach</span></h1>
  <img :src="imgBecoming" class="w-[90vw] tablet:hidden"/>
  <div class="flex max-w-[1300px] mx-auto px-4 mt-16 relative ">
    <div class="w-[783px] flex flex-col gap-5 z-10">
      <p class=" font-medium text-base leading-[25px]">Если у тебя есть желание делиться своим опытом, объяснять и слушать, изучать новое и<br>дарить знания другим, то мы ждем тебя в наши ряды.</p>
      <h3 class=" font-semibold text-4xl leading-[46px]">Вы можете стать наставником, если:</h3>
      <ul class=" font-normal text-sm leading-[25px] list-disc ml-4">
        <li>вы - действующий специалист в IT или Digital</li>
        <li>опыт работы в сфере от 3 лет</li>
        <li>вы готовы делиться техническими навыками</li>
        <li>уровень знаний Senior или уверенный Middle</li>
        <li>у вас есть ИП или статус самозанятого</li>
        <li>вы уже преподавали или готовы учиться преподавать</li>
        <li>оставите заявку и пройдете отбор</li>
      </ul>
      <div class="flex gap-5 flex-col tablet:flex-row">
        <div class="flex items-center gap-2">
          <img :src="svgBecoming"/>
          <p class=" font-semibold text-2xl leading-[22px]">Твой персональный график</p>
        </div>
        <div class="flex items-center gap-2">
          <img :src="svgBecoming"/>
          <p class=" font-semibold text-2xl leading-[22px]">Твой подход к обучению</p>
        </div>
      </div>
      <Button text="Заполнить анкету" class=" w-[173px] h-[38px] font-semibold text-sm leading-[17px] mt-5" @click="router.push('/edit-mentor')"/>
    </div>
    <div class="absolute z-0 top-0 right-0 w-[250px] tablet:w-[450px] laptop:w-auto hidden tablet:block">
      <img :src="imgBecoming" class=""/>
    </div>
  </div>
</template>
