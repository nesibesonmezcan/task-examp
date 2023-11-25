<template>
  <v-main>
     <v-container>
       <h2 class="pa-4">All Users</h2>
       <v-row>
         <v-col v-for="user in users" :key="user.id" cols="4">
           <RouterLink :to="{ name: 'user-view', params: { id: user.id } }">
             <v-card height="200">
               <v-row>
                 <v-col>
                   <v-img src="clean1.jpg" class="user-logo-img" />
                 </v-col>
                 <v-col>
                   <v-card-title>{{ user.name }}</v-card-title>
                   <v-card-subtitle>{{ user.tel }}</v-card-subtitle>
                   <v-card-subtitle>{{ user.website }}</v-card-subtitle>
                 </v-col>
               </v-row>
             </v-card>
           </RouterLink>
         </v-col>
       </v-row>
     </v-container>
   </v-main>
</template>

<script setup>
import userData from "../data.json";
import { ref } from 'vue'
const users = ref(userData)
</script>


<style scoped>
.users {
 background-color: #D8D9DD;
 height: 100%;
 padding: 0;
 margin: 0;
 display: flex;
 align-items: center;
 justify-content: space-around;
}

.user-logo {
 display: flex;
 align-items: center;
 justify-content: center;
}

.user-logo-img {
 width: 44px !important;

}

.user-left {
 height: 100vh;
 border: 1px solid rgba(255, 0, 0, 0.103);
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 margin: 0;
}

main.v-main {
 padding: 0 !important;
}
</style>