import { createApp } from "vue";
import App from "./App.vue";
import InlineSvg from "vue-inline-svg";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "./style.css";
import { router } from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(PrimeVue)
  .use(router)
  .use(pinia)
  .component("inline-svg", InlineSvg)
  .mount("#app");
