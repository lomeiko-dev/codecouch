<script setup lang="ts">
import anonim from "../../assets/anonim.png";
import Divider from "../ui/Divider.vue";
import CardClient from "../ui/CardClient.vue";
import Button from "../ui/Button.vue";
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { useWindowSize } from "@vueuse/core";
import { IConsultation, IUserAccount, getAccountById, updateAccount } from "@/api/services";
import { useAuthStore } from "@/shared/store/auth";
import { storeToRefs } from "pinia";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import camIcon from "@/assets/cam.svg";
import Dialog from "primevue/dialog";
import { router } from "@/providers/routing/router";
import { isCurrentTimeInRange } from "@/shared/lib/formatDate";

const authStore = useAuthStore();
const { authData } = storeToRefs(authStore);
const account = ref<IUserAccount>();
const isEdit = ref<boolean>(false);

const avatar = ref<string>("");
const email = ref<string>("");
const phone = ref<string>("");
const errors = ref<string>("");

const showModal = ref<boolean>(false);
const hoverAvatar = ref<boolean>(false);

const consultationsComing = ref<IConsultation[]>([]);
const consultationsPrevious = ref<IConsultation[]>([]);

const handleIncludeEdit = () => {
  isEdit.value = true;
  email.value = account.value?.email || "";
  phone.value = account.value?.phone || "";

  errors.value = "";
};

const handleIncludeModal = () => {
  showModal.value = true;
  avatar.value = account.value?.avatar || "";
};

const handleChangeAvatar = async () => {
  if (account.value) {
    const newAccount: IUserAccount = {
      ...account.value,
      avatar: avatar.value,
    };
    const result = await updateAccount(newAccount);

    if (!result.isError) {
      account.value = newAccount;
      showModal.value = false;
    }
  }
};

const handleChangeData = async () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email.value) && account.value) {
    const newAccount: IUserAccount = {
      ...account.value,
      email: email.value,
      phone: phone.value,
    };

    const result = await updateAccount(newAccount);

    if (!result.isError) {
      account.value = newAccount;
      isEdit.value = false;
      errors.value = "";
    }
  } else {
    errors.value = "Почта невалидна";
  }
};

const handleLogout = () => {
  authStore.logout();
  router.push("/");
};

onMounted(async () => {
  const result = await getAccountById(authData.value?.userId || "-1");

  if (!result.isError) {
    account.value = result.data as IUserAccount;

    result.data?.ConsultationsComing.forEach((item) => {
      if (isCurrentTimeInRange(item.data, item.time)) {
        consultationsPrevious.value.push(item);
      } else {
        consultationsComing.value.push(item);
      }
    });
  }
});

const { width } = useWindowSize();
</script>

<template>
  <div class="border rounded-[10px] w-[90vw] laptop:w-[1200px] shadow-2xl mt-10 mx-auto pb-10">
    <div class="p-3 tablet:p-9 flex flex-col tablet:flex-row justify-between">
      <div class="flex gap-4">
        <div
          @mouseenter="hoverAvatar = true"
          @mouseleave="hoverAvatar = false"
          :style="{ backgroundImage: `url(${account?.avatar !== '' ? account?.avatar : anonim})` }"
          class="rounded-[5px] w-[170px] h-[170px] bg-center bg-cover"
        >
          <div
            @click="handleIncludeModal"
            v-if="hoverAvatar"
            class="flex items-center justify-center w-full h-full bg-black/55 cursor-pointer"
          >
            <img class="w-24" :src="camIcon" />
          </div>
        </div>
        <h4 class="font-normal block text-lg tablet:text-[32px] w-fit leading-[39px]">
          {{ account?.fullname }}
        </h4>
      </div>
      <div class="flex flex-col gap-2 mt-10 tablet:mt-0">
        <div class="flex flex-col gap-2" v-if="!isEdit">
          <p class="font-normal text-lg leading-[21px]">
            Тел. моб: {{ account?.phone ? account?.phone : "Не привязан" }}
          </p>
          <p class="font-normal text-lg leading-[21px]">Почта: {{ account?.email }}</p>
        </div>
        <div class="flex flex-col gap-2" v-else>
          <InputMask mask="+7 (999) 999 99 99" v-model="phone" class="border p-2" placeholder="Тел. моб" />
          <InputText v-model="email" class="border p-2" placeholder="Почта" />
          <p class="text-red-500" v-if="errors !== ''">{{ errors }}</p>
        </div>
        <Button
          @click="!isEdit ? handleIncludeEdit() : handleChangeData()"
          class="p-[10px]"
          :text="isEdit ? 'Применить' : 'Редактировать'"
        />
        <Button @click="handleLogout" class="bg-red-600 p-[10px]" text="Выйти" />
      </div>
    </div>
    <Divider />
    <div v-if="consultationsComing.length !== 0" class="p-9 flex justify-between">
      <div class="flex justify-between w-full">
        <p class="font-medium text-[22px] leading-[26px]">Ближайшие консультации</p>
      </div>
    </div>
    <div class="flex px-3 tablet:px-9 gap-5">
      <swiper
        class="w-full"
        :slides-per-view="width > 1250 ? 3 : width > 850 ? 2 : 1"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :space-between="2"
      >
        <div class="swiper-button-prev"></div>
        <swiper-slide v-for="(item, index) in consultationsComing" :key="index">
          <CardClient
            :date="Number(item.data.split(' ')[0])"
            :month="item.data.split(' ')[1]"
            :day="item.data.split(' ')[2]"
            :name="item.name"
            :work="item.position"
            :time="item.time"
            :is-button="false"
            is-header
            :is-report="false"
            :is-feedback="false"
            :mentor-id="item.userId"
            :avatar="item.avatar"
          />
        </swiper-slide>

        <div class="swiper-button-next"></div>
      </swiper>
    </div>
    <div v-if="consultationsPrevious.length !== 0" class="p-9 flex justify-between">
      <p class="font-medium text-[22px] leading-[26px]">Предыдущие консультации</p>
    </div>
    <div class="flex px-3 tablet:px-9 gap-5">
      <swiper
        class="w-full"
        :slides-per-view="width > 1250 ? 3 : width > 850 ? 2 : 1"
        :modules="[Navigation]"
        :navigation="{
          prevEl: '.swiper-button-prev2',
          nextEl: '.swiper-button-next2',
        }"
        :space-between="2"
      >
        <swiper-slide v-for="(item, index) in consultationsPrevious" :key="index">
          <CardClient
            :account="account"
            :date="Number(item.data.split(' ')[0])"
            :month="item.data.split(' ')[1]"
            :day="item.data.split(' ')[2]"
            :name="item.name"
            :work="item.position"
            :time="item.time"
            :is-button="false"
            is-header
            :is-report="false"
            :is-feedback="true"
            :mentor-id="item.userId"
            :avatar="item.avatar"
          />
        </swiper-slide>
      </swiper>
    </div>
    <Dialog v-model:visible="showModal" modal header="Аватар" :style="{ width: '48rem' }">
      <div class="flex flex-row gap-2">
        <InputText v-model="avatar" class="w-full border p-2" placeholder="url" />
        <Button @click="handleChangeAvatar" class="p-2" text="Применить" />
      </div>
    </Dialog>
  </div>
</template>
<style></style>
