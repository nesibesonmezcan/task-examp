<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer">
      <div class="navigation-drawer">
        <component :is="dynamicComponent" />
        <div class="logo">
          <img src="/image1.png" class="user-logo-img" />
          <p>N2MOBİL</p>
        </div>
      </div>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import UserLeft from "@/components/UserLeft.vue";
import UserProfil from "./components/UserProfil.vue";

import { RouterView } from "vue-router";
import { ref, shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";

const drawer = ref(true);
const route = useRoute();

watch(
  () => route.path,
  () => {
    if (route.params.user_id) {
      dynamicComponent.value = UserProfil;
    } else {
      dynamicComponent.value = UserLeft;
    }
  }
);

const dynamicComponent = shallowRef(UserLeft);

const title = ref("N2MOBİL");

watchEffect(() => {
  document.title = route.meta.title || title.value;
});
</script>

<style>
.navigation-drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #d8d9dd;
}

.logo {
  display: flex;

  align-items: center;
  justify-content: space-between;
}
</style>
