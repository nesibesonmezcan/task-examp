<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="red-darken-2"
    ></v-progress-linear>
    <div v-for="album in albums" :key="album.id">
      <RouterLink
        :to="{ name: 'album-detail', params: { album_id: album.id } }"
      >
        {{ album.title }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/store/userStore";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();
const loading = ref(false);
const albums = ref([]);
onBeforeMount(async () => {
  loading.value = true;

  const userId = route.params.user_id;
  const filter = {
    userId: userId,
  };
  albums.value = await userStore.fetchAlbums(filter);
  console.log(albums.value);
  loading.value = false;
});

// const selectedphotoId = ref(null);

// const selectedphoto = (albumId) => {
//   selectedphotoId.value = albumId;
// };
</script>
