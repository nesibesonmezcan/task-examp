<template>
  <div v-for="photo in userStore.photos" :key="photo.id">
    <div>{{ photo.title }}</div>
    <img :src="photo.thumbnailUrl" />
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { ref } from "vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const loading = ref(false);
const route = useRoute();
const userStore = useUserStore();

onMounted(async () => {
  loading.value = true;
  const albumId = route.params.album_id;
  const filter = {
    albumId: albumId,
  };
  await userStore.fetchPhotos(filter);
  loading.value = false;
  console.log("la bebe", route.params.album_id);
});
</script>
