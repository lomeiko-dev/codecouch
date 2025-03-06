<script setup lang="ts">
import { getAccountById, IMentor } from "@/api/services";
import videoImg from "../../assets/video.svg";
import Button from "../ui/Button.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import {updateConsultationAccount} from '@/api/services'
import { useAuthStore } from "@/shared/store/auth";
import { storeToRefs } from "pinia";

interface IProps extends Pick<IMentor, "help" | "price" | "userId"> {}

const props = defineProps<IProps>();
const authStore = useAuthStore()
const {authData} = storeToRefs(authStore)
const date = ref<Date>(new Date())
const showModal = ref<boolean>(false);

const router = useRouter();

const handleSubscribe = async () => {
  const account = await getAccountById(authData.value?.userId || '-1')

  if(account.data !== null){
    const result = await updateConsultationAccount(account.data, date.value, props.userId)
    showModal.value = false
  }
}

</script>
<template>
  <div class="w-[90vw] laptop:w-[797px] h-fit border rounded-[10px] mx-auto mt-10 px-6 py-6 shadow-xl">
    <div>
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-xl leading-[28px]">B2B-консультация</h4>
        <div class="flex">
          <img :src="videoImg" />
          <p class="font-normal text-base leading-6">1 встреча в Zoom – 60 мин</p>
        </div>
        <p class="font-normal text-xs leading-[19px]">Консалтинг бизнеса</p>
      </div>
      <div>
        <ul class="font-normal text-base leading-6 flex flex-col gap-2 pt-5">
          <li v-for="help in props.help">– {{ help }}</li>
        </ul>
      </div>
    </div>
    <h5 class="font-bold text-base leading-6 laptop:w-[614px] mt-5">
      До консультации прошу выслать информацию о вашей компании, а также ссылки на текущие соцсети, если они есть
    </h5>
    <p class="font-normal text-sm leading-5 opacity-60 mt-5">Стоимость консультации ( 1 час )</p>
    <h5 class="font-bold text-xl leading-[28px] mt-5">{{ props.price }} ₽</h5>
    <Button
      text="Записаться"
      class="w-[90%] laptop:w-[384px] py-2 mt-5 font-medium text-sm leading-6"
      @click="showModal = !showModal"
    />
  </div>
  <Dialog v-model:visible="showModal" modal header="Записаться">
    <div class="flex flex-col gap-2">
      <Calendar :minDate="new Date()" showTime v-model="date" inline showWeek class=""/>
    <Button @click="handleSubscribe" class="p-2" text="Записаться"/>
    </div>
  </Dialog>
</template>
