<template>
  <div v-for="album in userStore.albums" :key="album.id">
    <v-card
      @click="selectedphotoId(album.id)"
      max-width="200"
      height="200"
      image="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      theme="dark"
    >
      <v-card-title>{{ album.title }} </v-card-title>
    </v-card>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/store/userStore";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;

  const userId = route.params.user_id;
  const filter = {
    userId: userId,
  };
  console.log("filteralbum", filter);
  await userStore.fetchAlbums(filter);
  loading.value = false;
});
const selectedphotoId = ref(null);

const selectedphoto = (albumId) => {
  selectedphotoId.value = albumId;
};
</script>
