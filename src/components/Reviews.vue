<script setup lang='ts'>
import Review from './ui/Review.vue';
import imgReview1 from '../assets/1отзыв.png'
import imgReview2 from '../assets/2отзыв.png'
import imgReview3 from '../assets/3отзыв.png'
import imgReview4 from '../assets/4отзыв.png'
import Button from './ui/Button.vue';
import { ref } from 'vue';

const reviewList = ref([
{
    img: imgReview1,
    name: "Елена Воронина",
    mentor: "Ментор: Мария Верхунова",
    text: "Еще до первой консультации с Марией я понимала, что она тот самый наставник, которого я давно искала. И я не ошиблась. Она удивительный человек, несомненный профессионал в сфере UX/UI, невероятно отзывчивая и милая."
  },
  {
    img: imgReview2,
    name: "Евгений",
    mentor: "Ментор: Илья Синицын",
    text: "Обращение к ментору) Владимир, я искренне хочу сказать, что ты супер ментор. Мне всё очень понравилось. К сильным сторонам могу отнести то, что ты подталкиваешь на самостоятельное копание в технологии."
  },
  {
    img: imgReview3,
    name: "Егор Малов",
    mentor: "Ментор: Максим Хахалкин",
    text: "Созвоны проходили комфортно. Видно, что Денису нравится преподавать. За это время нашли довольно много пробелов в знаниях + я гораздо увереннее стал себя чувствовать во время собеседования."
  },
  {
    img: imgReview4,
    name: "Александр Матасов",
    mentor: "Ментор: Геогрий Сафонов",
    text: "Занятия мне очень понравились. Благодаря знаниям Алексея и опыту у меня изменилась в лучшую сторону ситуация с поиском работы. Мы отработали несколько тем по теории тестирования, разобрали несколько тестовых заданий."
  }
])
  
</script>
<template>
  <h3 class=" font-semibold text-4xl leading-[46px] text-center mt-[70px]">Отзывы наших учеников</h3>
  <div class="grid gap-16 grid-cols-2 grid-rows-2 mx-auto w-fit mt-[50px]">
    <Review v-for="(item, index) in reviewList" :key="index" :img="item.img" :name="item.name" :mentor="item.mentor" :text="item.text"/>
  </div>
  <div class="flex justify-center mt-[50px] gap-[10px]">
    <Button text="Подобрать ментора"/>
    <Button text="Посмтореть еще отзывы" class="bg-white !text-black hover:!bg-[#E9E9E9] duration-300"/>
  </div>
</template>
<style>
    
</style>