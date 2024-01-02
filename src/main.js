// Plugins
import { registerPlugins } from "@/plugins";
// Components
import App from "./App.vue";
import "./index.css";

// Composables
import { createApp } from "vue";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
