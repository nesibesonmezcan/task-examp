<template>
  <v-row>
    <v-col class="album-detail-img" :cols="2" v-for="photo in userStore.photos" :key="photo.id">
      <img :src="photo.thumbnailUrl" />
    </v-col>
  </v-row>
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

<style>
*{
  margin: 0;
  padding: 0;
}
.album-detail-img{
  margin: 15px !important;
}
</style>