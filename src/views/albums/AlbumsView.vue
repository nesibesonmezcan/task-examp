<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="pink-darken-2"
    ></v-progress-linear>
    <v-row>
      <v-col class="" v-for="album in albums" :key="album.id" cols="4">
        <RouterLink
          :to="{ name: 'album-detail', params: { album_id: album.id } }"
        >
          <v-card
            class="box-content w-full h-full"
            max-width="400"
            height="430"
          >
            <v-row no-gutters class="p-4">
              <template v-for="(photo, index) in album.photos" :key="photo.id">
                <v-col v-if="index < 4" cols="6" class="p-5 ">
                  <img :src="photo.thumbnailUrl" class="w-full object-cover w-120" />
                </v-col>
              </template>
            </v-row>
            <v-card-subtitle class="">{{ album.title }}</v-card-subtitle>
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
    console.log("log", userStore.fetchPhotos({ albumId: album.id }));
  });

  loading.value = false;
});

// onMounted(async () => {
//   loading.value = true;
//   const userId = route.params.user_id;
//   const filter = { userId: userId };
//   albums.value = await userStore.fetchAlbums(filter);

//   for (const album of albums.value) {
//     album.photos = await userStore.fetchPhotos({ album_id: album.id });
//   console.log(album.photos);
//   }

//   loading.value = false;
// });
</script>
