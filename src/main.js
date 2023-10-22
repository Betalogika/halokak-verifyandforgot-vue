import { createApp } from "vue";
import { createPinia } from "pinia";
import NotifEmail from "./screens/NotifEmail.vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(NotifEmail);

app.mount("#app");
