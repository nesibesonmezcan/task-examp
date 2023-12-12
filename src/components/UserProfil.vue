<template>
  <div class="fill-height">
    <div class="user-profile">
      <img src="/clean1.jpg" alt="" height="45">
      <div>
        <h4 class="selected-name">{{ userStore.selectedUser.name }}</h4>
        <p>{{ userStore.selectedUser.email }}</p>
      </div>
    </div>
    <hr>
    <div class="user-icons">

      <router-link v-for="route in routes[0].children[1].children" :key="route.name" :to="route.name"
        :class="{ 'active-link': $route.path === '/' + route.name }">
        {{ route.name }}
      </router-link>



    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore';
import { routes } from "@/router"
// import { computed } from 'vue';

console.log("hollaa", routes[0].children[1].children)

const userStore = useUserStore();
// const routes = computed(() => route.options.routes);

</script>

<style scoped>
/* Stil Dosyası */
.fill-height {
  height: 100%;
}

.user-icons {
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: aliceblue;
}

/* Diğer stiller buraya */
</style>