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
      >
        <div>
          <router-link
            :to="route.path"
            :class="{
              'bg-gray-100 bg-opacity-50 hover:bg-gray-200':
                $route.path === '/' + route.name,
            }"
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

<style scoped>
.router-link-active {
  background-color: aliceblue;
  padding: 15px;
  width: 256px !important;
  margin: 15px;
}
.fill-height {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 15px;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-profile img {
  margin-right: 15px;
}

.selected-name {
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
}

.user-icons {
  display: flex;
  flex-direction: column;
}

.user-icons div {
  margin-bottom: 10px;
}

.active-link {
  color: blue;
  font-weight: bold;
}
</style>
