<script setup lang="ts">
import Divider from './Divider.vue';
import Button from './Button.vue';
import { useRouter } from 'vue-router';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';
import Textarea from 'primevue/textarea';
import { IFeedback } from '@/api/services/feedback';
import { IUserAccount, sendFeedback } from '@/api/services';


interface Props {
  account?: IUserAccount
  mentorId: string;
  avatar: string;
  date?: number
  month?: string
  day?: string
  name: string
  work: string
  time: string
  isButton: boolean
  isHeader: boolean
  isReport: boolean
  isFeedback: boolean
}

const props = defineProps<Props>()
const router = useRouter()

const showModal = ref<boolean>(false)
const message = ref<string>('')

const handleSendFeedback = async () => {
  if(props.account && message.value !== ''){
    console.log(props.account)
    const newFeedback: Omit<IFeedback, 'id'> = {
      avatar: props.account.avatar,
      comment: message.value,
      fullname: props.account.fullname,
      mentorId: props.mentorId,
      mentorName: props.name
    }

    const result = await sendFeedback(newFeedback);

    if(!result.isError){
      showModal.value = false;
      message.value = '';
    }
  }
}
</script>
<template>
  <div class="border rounded-[10px] w-full max-w-[360px] pb-2">
    <div v-if="props.isHeader" class="flex gap-[6px] p-4">
      <p class="font-medium text-2xl tablet:text-[40px] leading-[48px]">{{ props.date }}</p>
      <div class="flex flex-col">
        <p class="font-medium text-xl tablet:text-[22px] leading-[26px]">{{ props.month }}</p>
        <p class="font-medium text-xl tablet:text-[22px] leading-[26px]">{{ props.day }}</p>
      </div>
    </div>
    <Divider class="bg-[#6F766C]" v-if="props.isHeader" />
    <div
      @click="router.push(`/account-mentor/${props.mentorId}`)"
      class="border rounded-[10px] w-[95%] tablet:w-[340px]w-[304px] h-[104px] my-4 mx-auto"
    >
      <div class="flex gap-4 h-full">
        <div class="w-[96px] bg-cover bg-center" :style="{ backgroundImage: `url(${props.avatar})` }"></div>
        <div class="flex flex-col gap-1 justify-center">
          <h3 class="font-semibold text-sm tablet:text-lg leading-6">{{ props.name }}</h3>
          <p class="font-normal text-xs tablet:text-sm leading-5 text-[#001E00]">{{ props.work }}</p>
          <p class="font-medium text-xs tablet:text-[15px] leading-5">{{ props.time }}</p>
        </div>
      </div>
    </div>
    <Button v-if="$props.isButton" text="Подробнее" class="block w-[95%] tablet:w-[308px] h-10 mx-auto" />
    <Button
      v-if="$props.isReport"
      text="Пожаловаться"
      class="block w-[95%] tablet:w-[308px] h-10 mx-auto bg-[#FF0505]"
    />
    <Button
      @click="showModal = true"
      v-if="$props.isFeedback"
      text="Оставить отзыв"
      class="block w-[95%] tablet:w-[308px] h-10 mx-auto mt-3"
    />
  </div>
  <Dialog modal v-model:visible="showModal" header="Отзыв" class="w-full max-w-[700px]">
    <div class="flex flex-col gap-3">
      <Textarea placeholder="текст" class="border p-2" v-model="message" rows="5" cols="30" />
      <Button @click="handleSendFeedback" class="p-2" text="Отпарвить" />
    </div>
  </Dialog>
</template>
