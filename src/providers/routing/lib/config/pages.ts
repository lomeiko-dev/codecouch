import MainPageVue from "@/pages/MainPage.vue";
import { typeRoute } from "../types/type";
import SearchMentorVue from "@/pages/SearchMentor.vue";
import BecomingMentorVue from "@/pages/BecomingMentor.vue";
import ApplicationMentorVue from "@/pages/ApplicationMentor.vue";
import AccountMentorVue from "@/pages/AccountMentor.vue";
import LCmentorVue from "@/pages/LCmentor.vue";
import EditMentorVue from "@/pages/EditMentor.vue";
import CalendarVue from "@/pages/Calendar.vue";
import admin1Vue from "@/pages/admin1.vue";
import admin2Vue from "@/pages/admin2.vue";
import AuthVue from "@/pages/Auth.vue";

export const pages: typeRoute[] = [
  {
    path: "/",
    component: MainPageVue,
    name: "MainPage",
    isRequired: false,
  },
  {
    path: "/search-mentor",
    component: SearchMentorVue,
    name: "SearchMentor",
    isRequired: false,
  },
  {
    path: "/becoming-mentor",
    component: BecomingMentorVue,
    name: "BecomingMentor",
  },
  {
    path: "/application-mentor",
    component: ApplicationMentorVue,
    name: "ApplicationMentor",
    isRequired: false,
  },
  {
    path: "/account-mentor/:id",
    component: AccountMentorVue,
    name: "AccMentor",
    isRequired: false,
  },
  {
    path: "/auth-client/:role",
    component: AuthVue,
    name: "Auth",
    isRequired: false,
  },
  {
    path: "/client-mentor",
    component: LCmentorVue,
    name: "LCmentor",
    isRequired: true,
  },
  {
    path: "/edit-mentor",
    component: EditMentorVue,
    name: "EditMentor",
    isRequired: true,
  },
  {
    path: "/calendar",
    component: CalendarVue,
    name: "Calendar",
    isRequired: true,
  },
  {
    path: "/admin1",
    component: admin1Vue,
    name: "Admin1",
    isRequired: true,
  },
  {
    path: "/admin2",
    component: admin2Vue,
    name: "Admin2",
    isRequired: true,
  },
];
