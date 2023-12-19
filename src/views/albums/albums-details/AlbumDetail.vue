<template>
  <div v-for="photo in userStore.photos" :key="photo">
    <v-img :width="300" :src="photo.thumbnailUrl"> </v-img>
    {{ photo.title }}
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { ref } from "vue";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const loading = ref(false);
const route = useRoute();
const userStore = useUserStore();
onBeforeMount(async () => {
  loading.value = true;
  const albumId = route.params.album_id;
  const filter = {
    albumId: albumId,
  };

  await userStore.fetchPhotos(filter);
  loading.value = false;
});
</script>
