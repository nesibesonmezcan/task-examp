<template>
  <div class="flex">
    <div
      class="album-detail-img"
      v-for="photo in userStore.photos"
      :key="photo.id"
    >
      <img class="p-4 !flex" :src="photo.thumbnailUrl" />
    </div>
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
});
</script>

<style scoped></style>
