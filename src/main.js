import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueLazyload from "@jambonn/vue-lazyload";

const app = createApp(App);

app.use(VueLazyload, {
  preLoad: 1.3,
});
app.use(createPinia());
app.use(router);

app.mount("#app");
