<script setup lang='ts'>
import leftImg from '../../assets/left.svg'
import rightImg from '../../assets/right.svg'
import IrinaImg from '../../assets/Irinapng.png'
import tochkiImg from '../../assets/tochki.png'
  
</script>
<template>
  <div class=" w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div class="flex justify-between">
      <img :src="leftImg" class=" cursor-pointer"/>
      <div class="flex flex-col justify-center w-[639px] px-5">
        <h3 class=" font-bold text-[25px] leading-[34px] text-center">Отзывы</h3>
        <div>
          <div class="flex">
            <img :src="IrinaImg"/>
            <p class=" text-center my-auto font-semibold text-base tablet:text-xl leading-[27px] ml-2">Ирина Лебедева</p>
          </div>
            <p>Консультация прошла прекрасно! Евгения помогла собрать воедино весь опыт и подобрать нужные формулировки. Очень понравилась подход: в фигме наглядно было показано, что убрать, а что добавить. Полезна была запись, которую я потом пересмотрела. И, конечно, получилась очень комфортная беседа, было нестрашно рассказывать о своем опыте и приятная обратная связь.По итогу отправила резюме в компанию, которую и планировала. Резюме рассмотрели, вернулись с обратной связью и позвали на собеседование! Заинтересовались, одним словом)Мне очень понравилось работать с Эйчем и, если снова встанет вопрос о карьере, то обязательно обращусь. Понравилась коммуникация в чате и то, что менеджеры помогли подобрать такого классного эксперта. И в целом коммуникация была очень теплая)</p>
          </div>
          <img :src="tochkiImg" class="w-[96px] h-[10px] mx-auto mt-4"/>
      </div>
      <img :src="rightImg" class=" cursor-pointer"/>
    </div>
  </div>
</template>
