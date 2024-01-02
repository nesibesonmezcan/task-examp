<template>
  <header class="d-flex align-items-center justify-flex-start">
    <v-btn @click="router.back()"  rounded="lg" icon="mdi-arrow-left" ></v-btn>
    <h2 >{{ title }}</h2>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const titles = {
  albums: "GO BACK",
  todos: "GO BACK",
  posts: "GO BACK",
  "album-detail": "GO ALBUMS",
};

const title = computed(() => titles[route.name] || "All Users");
</script>
<style scoped>
header {
    margin: 5px;
  align-items: center !important;
}
h2{
    margin: 5px;
}
</style>
