<template>
  <main>
    <div v-for="post in userStore.posts" :key="post.id">
      {{ post.userId }}
    </div>



  </main>
</template>
  
<script setup>

import router from '@/router'


import { useUserStore } from "@/store/userStore";

import { onBeforeMount } from "vue";

import { useRoute } from 'vue-router';


const route = useRoute()

const userStore = useUserStore();

console.log(" la ibo", route.meta);
onBeforeMount(async () => {
  const userId = route.params.id
  const filter = {
    userId: userId,
  }
  console.log(filter)
  await userStore.fetchPosts(filter);
});
</script>
<!-- 
// <template>
//   <div class="text-center" v-for="post in userStore.posts" :key="post.id">

//   <div>
//     {{ post.id }} {{ post.title }}
//   </div>
//   <div>
//     {{ post.body }}
//   </div>
//   See more<v-btn>
//     <v-dialog v-model="dialog" activator="parent" width="auto">
//       <v-card>
//         <v-card-text>
//           {{ post.body }} </v-card-text>
//         <v-card-actions>
//           <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
//       </v-card-actions>
//     </v-card>
//   </v-dialog>
// </v-btn>
//   </div >
// </template >


//   <script setup>

//     import router from '@/router'
//     import {useUserStore} from "@/store/userStore";
//     import {ref} from 'vue';
//     import {onBeforeMount} from "vue";
//     import {useRoute} from 'vue-router';

//     const route = useRoute()
//     const userStore = useUserStore();
//     const dialog = ref(false)
//     console.log(" la ibo", route.meta);
// onBeforeMount(async () => {
//   const userId = route.params.id
//     const filter = {
//       userId: userId,
//   }
//     console.log(filter)
//     await userStore.fetchPosts(filter);
// });



// </script>


// <style scoped>
// div {
//   padding: 25px;
// }
// </style>
   -->