<template>
  <header class="flex items-center m-6">
    <v-icon
      class="rounded-lg border-2 border-black h-8 w-8 ma-2"
      @click="router.back()"
      icon="mdi-arrow-left"
    ></v-icon>
    <strong>
      <h2 class=" ">
        {{ title }}
      </h2>
    </strong>
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

const title = computed(() => titles[route.name] || "");
</script>
<style scoped></style>
