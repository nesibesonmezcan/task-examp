<template>
   <main v-for="album in userStore.albums" :key="album.id">
  <RouterLink :to="{name:'album-detail', params: {id:album.id}}">
    <v-card
    class="" 
    max-width="400"
   @click="goToAlbums(album)"
    >
       
    <v-img
      class="align-end text-white"
      height="300"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
     
    </v-img>

     <v-card-title> {{ album.title  }}</v-card-title>
  
  </v-card>
  </RouterLink>
  </main>
</template>


<!-- <template>
  <v-container>
   
 
      <v-btn 
      </v-btn>
    
  </v-container>
</template> -->

<script setup>
import UserGo from '@/components/UserGo.vue'
import router from '@/router'
import { useUserStore } from "@/store/userStore";
import { onBeforeMount } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()
const userStore = useUserStore();

console.log("la", route);
onBeforeMount(async () => {
  const userId = route.params.id
  const filter = {
    userId: userId,
  }
  console.log(filter)
  await userStore.fetchAlbums(filter);
});
const goToAlbums=(album)=>{
  userStore.selectedAlbum=album
}
</script>
