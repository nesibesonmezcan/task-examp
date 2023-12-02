
<template>
  <div>
    <div class="fill-height">
      <div class="user-profil">
        <img src="/clean1.jpg" alt="" height="45">
       <div> 
        <h4 class="selected-name" >{{ userStore.selectedUser.name}}</h4>
        <p>{{userStore.selectedUser.email  }}</p>
        </div>
      </div>
      <hr>
      <div class="user-iconn">
        <div>
          <router-link  :to="{name: 'todos'}" 
          :class="{ 'active-link': $route.path.includes ('/todos') }">
          <div></div> Todos</router-link>
        </div>
     
        <div>
         <router-link  :to="{name: 'posts'}" 
         :class="{ 'active-link': $route.path.includes ('/posts') }">
         <div></div> 
          Posts</router-link>
        </div>
        
        <div>
         <router-link :to="{name: 'albums'}"
          :class="{ 'active-link': $route.path.includes('/albums') }">
          <div></div> 
          Albums
        </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore';
const userStore = useUserStore();


</script>

<style scoped>
/* Stil Dosyası */
.fill-height {
  height: 100%;
}

.user-profil {
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 15px;
}

.user-profil img {
  border-radius: 50%;
  margin-right: 15px;
}

.selected-name {
  font-size: 1rem;
  margin-bottom: 5px;
}

.user-iconn {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.user-iconn > div {
  margin: 10px;
}
.user-profil > div> p {
font-size: small;
}
.user-iconn > div > a {
  text-decoration: none;

  display: flex;
  align-items: center;
  color: black;
  font-size: small;
}

.active-link {
  background-color: rgb(255, 255, 255);
  color: #221414;
  width: 256px;
  padding: 10px;
  border-radius: 5px;
}

.user-iconn > div > a > div {
  margin-right: 10px;
}

/* Opsiyonel */
/* Önerilen: Tüm linkleri birbirinden ayırarak stil verin. */
.user-iconn > div > a:not(:last-child) {
  margin-bottom: 10px;
}

/* Önerilen: SVG simgelerinin boyutunu ayarlayın */
svg {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

</style>
