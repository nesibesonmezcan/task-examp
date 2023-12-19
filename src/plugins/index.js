import vuetify from "./vuetify";
import router from "../router";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export function registerPlugins(app) {
  app.use(router);
  app.use(vuetify);
  app.use(pinia);
}
