<script setup lang='ts'>
import { ref } from 'vue';
import xImg from '../../assets/x.svg'
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from '../ui/Button.vue';

interface IMentor {
  name: string
  surname: string
  time: string
  resume: string
  connection: string
  email: string
}
const mentor = ref<IMentor>({
  name: '',
  surname: '',
  time: '',
  resume: '',
  connection: '',
  email: ''
})
const selectedTimes = ref()
const times = ref([
  { time: 'UTC+2'},
  { time: 'UTC+3'},
  { time: 'UTC+4'},
  { time: 'UTC+5'},
  { time: 'UTC+6' },
  { time: 'UTC+7' },
  { time: 'UTC+8' },
  { time: 'UTC+9' },
  { time: 'UTC+10' },
  { time: 'UTC+11' },
  {time: 'UTC+12'},
])
  
</script>
<template>
  <div class="border rounded-xl w-[80vw] laptop:w-[670px] mt-14 mx-auto p-6">
    <div class="flex justify-between">
      <h3 class=" font-semibold tablet:text-[30px] leading-[33px] text-lg ">Заявка, чтобы стать ментором</h3>
      <img :src ="xImg" class=" cursor-pointer"/>
    </div>
    <div class="mt-4">
        <h4 class=" font-medium text-xl leading-6">Имя</h4>
        <div class="card flex justify-content-center mt-4">
            <InputText id="username" class=" border rounded-[10px] px-3 w-full h-[54px]" placeholder="Имя" v-model="mentor.name" />
        </div>
    </div>
    <div class="mt-4">
        <h4 class=" font-medium text-xl leading-6">Фамилия</h4>
        <div class="card flex justify-content-center mt-4">
            <InputText id="username" class=" border rounded-[10px] px-3 w-full h-[54px]" placeholder="Иванович" v-model="mentor.surname" />
        </div>
    </div>
    <div class="mt-4">
        <h4 class=" font-medium text-xl leading-6">Часовой пояс</h4>
          <Dropdown v-model="selectedTimes" :options="times" optionLabel="time" placeholder="GMT+2" class="border w-full mt-4" />
    </div>
    <div class="mt-4">
        <h4 class=" font-medium text-xl leading-6">Ссылка на резюме</h4>
        <div class="card flex justify-content-center mt-4">
            <InputText id="username" class=" border rounded-[10px] px-3 w-full h-[54px]" placeholder="Ссылка на Google Drive или Linkedln" v-model="mentor.resume" />
        </div>
    </div>
    <div class="mt-4">
        <h4 class=" font-medium text-xl leading-6">Способы связи</h4>
        <div class="card flex justify-content-center mt-4 flex-col">
            <InputText id="username" class=" border rounded-[10px] px-3 w-full h-[54px]" placeholder="Ваш ник в телеграм" v-model="mentor.connection" />
            <InputText id="username" class=" border rounded-[10px] px-3 w-full h-[54px] mt-3" placeholder="Ваша почта" v-model="mentor.email" />
        </div>
    </div>
<div>
  <p class="mt-5 max-w-[600px]">Отправляя заявку, вы принимаете условия <span class="text-blue-800 cursor-pointer">лицензионного соглашения</span> и соглашаетесь с <span class="text-blue-800 cursor-pointer">политикой обработки персональных данных</span></p>
  <Button text="Отправить" class=" px-[50px] py-[13px] mt-5"/>
</div>
  </div>
</template>
