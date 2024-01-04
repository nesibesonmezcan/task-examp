<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="pink-darken-2"
    ></v-progress-linear>
    <v-row class="">
      <v-col class="" v-for="album in albums" :key="album.id" cols="4">
        <RouterLink
          :to="{ name: 'album-detail', params: { album_id: album.id } }"
        >
          <v-card
            height="auto"
            width="360"
            class="card-user !rounded-xl !border-2 !border-gray-light
            m-5 !box-border "
          >
            <v-row class="!p-0 !m-6">
              <template v-for="(photo, index) in album.photos" :key="photo.id">
                <v-col v-if="index < 4" cols="6" class="!p-0 ">
                  <img :src="photo.thumbnailUrl" class="w-full  " />
                </v-col>
              </template>
            </v-row>
            <div class="text-sm  font-normal leading-5 pb-5 pl-5">{{ album.title }}</div>
          </v-card>
        </RouterLink>
      </v-col>
    </v-row>
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
  const filter = { userId: userId };
  albums.value = await userStore.fetchAlbums(filter);
  albums.value.forEach(async (album) => {
    album["photos"] = await userStore.fetchPhotos({ albumId: album.id });
  });

  loading.value = false;
});
</script>
<style></style>
