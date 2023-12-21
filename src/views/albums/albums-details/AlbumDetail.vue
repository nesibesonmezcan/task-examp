<template>
  <div v-for="photo in userStore.photos" :key="photo.albumId">
    <v-img :width="300" :src="photo.thumbnailUrl"> </v-img>
    {{ photo.title }}
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

  await userStore.fetchPhotos({ albumId: props.selectedphotoId });
  loading.value = false;
});

const props = defineProps(["selectedphotoId"]);
</script>
