<template>
    <v-container>
      <v-row>
        <v-col v-for="photo in userStore.photos" :key="photo.id">
          <v-card
        
            class="mx-auto"
            max-width="200"
            height="200"
            title="Card title"
            theme="dark"
          >
          {{ album.title }}
          <img src="{album.url}" alt="">
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useUserStore } from '@/store/userStore';
  import { onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  
  const userStore = useUserStore();
  const route = useRoute();
  
  onBeforeMount(async () => {
    const albumId = route.params.id;
    const filter = {
      albumId: albumId,
    };
    await userStore.fetchPhotos(filter);
  });
  </script>
  