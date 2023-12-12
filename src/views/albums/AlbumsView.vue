<template>
  <v-main>
    <RouterLink v-for="album in userStore.albums" :key="album.id"
      :to="{ name: 'album-detail', params: { album_id: album.id } }">
      <v-card class="" max-width="400" @click="goToAlbums(album)">

        <v-img class="align-end text-white" height="300" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>

        </v-img>

        <v-card-title> {{ album.title }}</v-card-title>


      </v-card>
    </RouterLink>
  </v-main>
</template>


<script setup>
import { onBeforeMount, ref } from 'vue'
import { useUserStore } from "@/store/userStore";
import { useRoute } from 'vue-router';

const userStore = useUserStore()
const route = useRoute()
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true

  const userId = route.params.user_id
  const filter = {
    userId: userId
  }
  console.log("filteralbum", filter)
  await userStore.fetchAlbums(filter)
  loading.value = false

});
const goToAlbums = (album) => {
  userStore.selectedAlbumById = album
}
</script>
