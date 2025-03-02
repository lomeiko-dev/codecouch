import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import SearchMentor from "./pages/SearchMentor.vue";
import BecomingMentor from "./pages/BecomingMentor.vue";
import ApplicationMentor from "./pages/ApplicationMentor.vue";
import AccountMentor from "./pages/AccountMentor.vue";
import Auth from "./pages/Auth.vue";
import LCmentor from "./pages/LCmentor.vue";
import EditMentor from "./pages/EditMentor.vue";
import Calendar from "./pages/Calendar.vue";
import Admin1 from "./pages/admin1.vue";
import Admin2 from "./pages/admin2.vue";
const routes = [
  {
    path: "/",
    component: MainPage,
    name: "MainPage",
  },
  {
    path: "/search-mentor",
    component: SearchMentor,
    name: "SearchMentor",
  },
  {
    path: "/becoming-mentor",
    component: BecomingMentor,
    name: "BecomingMentor",
  },
  {
    path: "/application-mentor",
    component: ApplicationMentor,
    name: "ApplicationMentor",
  },
  {
    path: "/account-mentor/:id",
    component: AccountMentor,
    name: "AccMentor",
  },
  {
    path: "/auth-client/:role",
    component: Auth,
    name: "Auth",
  },
  {
    path: "/client-mentor",
    component: LCmentor,
    name: "LCmentor",
  },
  {
    path: "/edit-mentor",
    component: EditMentor,
    name: "EditMentor",
  },
  {
    path: "/calendar",
    component: Calendar,
    name: "Calendar",
  },
  {
    path: "/admin1",
    component: Admin1,
    name: "Admin1",
  },
  {
    path: "/admin2",
    component: Admin2,
    name: "Admin2",
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
