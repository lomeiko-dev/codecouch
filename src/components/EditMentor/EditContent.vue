<script setup lang="ts">
import { storeToRefs } from "pinia";
import Divider from "../ui/Divider.vue";
import { useMentorFormStore } from "./model/store/mentorFromStore";
import InputChip from "../ui/InputChip.vue";
import Button from "../ui/Button.vue";
import { onMounted, ref } from "vue";
import camIcon from '@/assets/cam.svg'
import anonim from '@/assets/anonim.png'
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import { useAuthStore } from "@/shared/store/auth";
import { getAccountById, IMentor, addNewMentor } from "@/api/services";
import { useRouter } from "vue-router";

const mentorFormStore = useMentorFormStore();
const authStore = useAuthStore()
const {authData} = storeToRefs(authStore)
const { form, help, errors } = storeToRefs(mentorFormStore);

const hoverAvatar = ref<boolean>(false)
const showModal = ref<boolean>(false)

const router = useRouter()

onMounted(async () => {
  const account = await getAccountById(authData.value?.userId || '-1');

  if(!account.isError){
    form.value.fullname = account.data?.fullname
    form.value.email = account.data?.email
    form.value.phone = account.data?.phone
  }
})

const handeSendMentor = async () => {
  mentorFormStore.validate()

  if(errors.value.length === 0){
    const newMentor: Partial<IMentor> = {
      ...mentorFormStore.assembleForm(),
      userId: authData.value?.userId || '-1',
      rating: 0,
      lessonCount: 0,
    }

    const result = await addNewMentor(newMentor)

    if(!result.isError){
      mentorFormStore.clear()
      router.push('/')
    }
  }
}

</script>
<template>
  <div class="border rounded-[10px] w-[90vw] laptop:w-[1200px] mx-auto mt-[80px] shadow-2xl">
    <div class="px-6 pt-9 flex flex-col laptop:flex-row mx-auto laptop:mx-0 justify-between">
      <div class="flex flex-col laptop:flex-row gap-14">
        <div
          @mouseenter="hoverAvatar = true"
          @mouseleave="hoverAvatar = false"
          :style="{ backgroundImage: `url(${form.avatar === undefined || '' ? anonim : form.avatar})` }"
          class="rounded-[5px] w-[170px] h-[170px] bg-center bg-cover"
        >
          <div
            @click="showModal = true"
            v-if="hoverAvatar"
            class="flex items-center justify-center w-full h-full bg-black/55 cursor-pointer"
          >
            <img class="w-24" :src="camIcon" />
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col gap-3">
            <p class="font-medium text-base leading-[24px]">Имя Отчество:</p>
            <input
              readonly
              v-model="form.fullname"
              placeholder="Иван"
              class="opacity-60 cursor-default border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3"
            />
          </div>
          <div class="w-full">
            <div class="flex justify-between w-full laptop:w-[535px] mt-3 laptop:mt-0">
              <p class="font-medium text-base leading-[24px]">Ваше направление:</p>
            </div>
            <input
              v-model="form.position"
              placeholder="СТО..."
              class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3"
              :class="errors.includes('position') && 'cls-error'"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-3">
          <p class="font-medium text-base leading-[24px]">Почта:</p>
          <input
            v-model="form.email"
            placeholder="qwerty@gmail.com"
            class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3"
            :class="errors.includes('email') && 'cls-error'"
          />
        </div>
        <div class="flex flex-col gap-3">
          <p class="font-medium text-base leading-[24px]">Телефон:</p>
          <input
            v-model="form.phone"
            placeholder="+1-234-567-89-00"
            class="border rounded-[10px] h-[38px] w-full laptop:w-[315px] px-3"
            :class="errors.includes('phone') && 'cls-error'"
          />
        </div>
      </div>
    </div>
    <Divider class="mt-4 bg-[#E9E9E9]" />
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Обо мне:</p>
        <p class="font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea
        v-model="form.description"
        placeholder="– Присоединился к команде Утконоса в 2020, отвечаю за направление клиентских сервисов, команда
более 100 человек.
– В OZON занимался реферальной программой в качестве продакта реферальной программы.
– Участвовал в запуске приложений доставки продуктов Лента Онлай и Перекресток Впрок,
– Запускал мобильное приложение ювелирного гипермаркета SUNLIGHT."
        class="border rounded-[10px] h-[130px] w-full mt-2 px-3"
      />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">С чем вы можете помочь?</p>
    <div class="px-6">
      <textarea
        v-model="help"
        class="border rounded-[10px] h-[130px] w-full mt-2 px-3"
        placeholder="- Разработать приложение на фреймворке Vue.js ...."
      />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">В каких компаниях вы работали</p>
    <div class="px-6">
      <InputChip v-model:model-value="form.companies" class="mt-2" placeholder="Ozon..." />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">Какой уровень должен быть у ваших учеников?</p>
    <div class="px-6">
      <InputChip v-bind:model-value="form.availableLevel" class="mt-2" placeholder="Junior..." />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">В каких сферах вы компетентны?</p>
    <div class="px-6">
      <InputChip v-bind:model-value="form.spheres" class="mt-2" placeholder="Разработка..." />
    </div>
    <p class="font-medium text-base leading-[24px] px-6 mt-6">Какие у вас навыки?</p>
    <div class="px-6">
      <InputChip v-bind:model-value="form.skills" class="mt-2" placeholder="React..." />
    </div>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Перечислите где вы работали и какие должности там занимали</p>
        <p class="font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea
        v-model="form.workExperience"
        placeholder="Утконос Онлайн — CTO
       Лента Онлайн  — CPO
        Перекресток, Х5  — PO
         Sunlight  — Head of Mobile"
        class="border rounded-[10px] h-[100px] w-full mt-2 px-3"
      />
    </div>
    <div class="px-6">
      <div class="flex justify-between pt-5">
        <p class="font-medium text-base leading-[24px]">Блок с произвольной информацией (по желанию)</p>
        <p class="font-normal text-sm leading-5 text-[#6F766C]">Макс: 1000 символов</p>
      </div>
      <textarea v-model="form.information" class="border rounded-[10px] h-[50px] w-full mt-2 px-3" />
    </div>
    <div class="px-6 flex justify-between py-6">
      <div>
        <p class="font-medium text-base leading-[24px]">Цена за час</p>
        <input v-model="form.price" :class="errors.includes('price') && 'cls-error'" class="border rounded-[10px] h-[38px] w-[315px] px-3" />
      </div>
      <Button @click="handeSendMentor" class="px-4" text="отправить" />
    </div>
    <Dialog v-model:visible="showModal" modal header="Аватар" :style="{ width: '48rem' }">
      <div class="flex flex-row gap-2">
        <InputText v-model="form.avatar" class="w-full border p-2" placeholder="url" />
        <Button @click="showModal = false" class="p-2" text="Применить" />
      </div>
    </Dialog>
  </div>
</template>
