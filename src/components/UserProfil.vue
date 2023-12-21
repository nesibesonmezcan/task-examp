<template>
  <div class="fill-height">
    <div class="user-profile">
      <img src="/clean1.jpg" alt="" height="45" />
      <div>
        <h4 class="selected-name">{{ userStore.selectedUser.name }}</h4>
        <p>{{ userStore.selectedUser.email }}</p>
      </div>
    </div>
    <hr />
    <div class="user-icons">
      <template
        v-for="route in routes[0].children[1].children"
        :key="route.name"
        ><div>
          <router-link
            :to="route.path"
            :class="{ 'active-link': $route.path === '/' + route.name }"
          >
            {{ route.name }}
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { routes } from "@/router";

const userStore = useUserStore();
</script>

<!-- <style scoped>
.fill-height {
  height: 100%;
  display: flex;
  align-items: start;
  padding: 15px;
  justify-content: flex-start;
}
.router-link {
  padding: 25px;
  margin: 25px;
  border: 1px solid red;
  width: 50px;
  height: auto;
  text-decoration: none;
}
.router-link-active {
  color: blue;
  padding: 15px;
  margin-bottom: 15px;
  background-color: aliceblue;
  width: 100%;
}
.user-icons {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
  margin: 15px;
  border: 2px solid rgb(0, 255, 119);
  width: 100%;
  height: auto;
}
.user-icons.a {
  border: 1px solid rgb(0, 94, 255);
}
</style> -->
