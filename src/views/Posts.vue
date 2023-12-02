<template>
 
    <main>
      <UserGo @click="router.push(`/`)" />
    <div v-for="post in userStore.posts" :key="post.id">
      {{ post.userId }}
    </div>
    </main>
  
</template>
  
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
  await userStore.fetchPosts(filter);
});

// export default {
//   data() {
//     return {
//       posts: [
      
//   {
//     "id": 1,
//     "title": "Evde Kedi Besliyor Musunuz?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Evet, evde bir kedi besliyorum. Oldukça sevimli ve oyuncu bir dostum var."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Kediler harika dostlar, hangi cins?"
//       },
//       {
//         "sender": "Ben",
//         "content": "Sokaklardan birini sahiplendik, cinsi belirsiz ama harika bir karakteri var."
//       }
//     ]
//   },
//   {
//     "id": 2,
//     "title": "Arabanız Var Mı?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Hayır, arabam yok ama genellikle toplu taşıma veya bisiklet kullanıyorum."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Bisiklet sürmek harika bir egzersizdir."
//       }
//     ]
//   },
//   {
//     "id": 3,
//     "title": "Evli Misiniz?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Evet, evliyim ve mutlu bir evliliğim var."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Mutluluklar dilerim!"
//       }
//     ]
//   },
//   {
//     "id": 4,
//     "title": "Evde Kedi Besliyor Musunuz?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Evet, evde bir kedi besliyorum. Oldukça sevimli ve oyuncu bir dostum var."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Kediler harika dostlar, hangi cins?"
//       },
//       {
//         "sender": "Ben",
//         "content": "Sokaklardan birini sahiplendik, cinsi belirsiz ama harika bir karakteri var."
//       }
//     ]
//   },
//   {
//     "id": 5,
//     "title": "Arabanız Var Mı?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Hayır, arabam yok ama genellikle toplu taşıma veya bisiklet kullanıyorum."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Bisiklet sürmek harika bir egzersizdir."
//       }
//     ]
//   },
//   {
//     "id": 6,
//     "title": "Evli Misiniz?",
//     "messages": [
//       {
//         "sender": "Ben",
//         "content": "Evet, evliyim ve mutlu bir evliliğim var."
//       },
//       {
//         "sender": "Ziyaretçi",
//         "content": "Mutluluklar dilerim!"
//       }
//     ]
//   }
// ]      
//     };
//   }
// };


</script>


<style scoped>
div {
  padding: 25px;
}
</style>
  