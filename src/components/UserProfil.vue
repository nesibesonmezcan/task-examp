<template>
  <div class="fill-height">
    <div class="user-profile">
      <img
        class="userProfil-img"
        src="/clean1.jpg"
        alt=""
        width="50"
        height="50"
      />
      <div>
        <h4 class="selected-name">{{ userStore.selectedUser.name }}</h4>
        <p>{{ userStore.selectedUser.email }}</p>
      </div>
      <hr />
    </div>

    <div class="pb-6">
      <template
        v-for="(route, index) in routes[0].children[1].children"
        :key="index"
        ><router-link
          :to="route.path"
          :class="{ active: $route.path.includes(route.name) }"
        >
          <div class="user-icon pl-7 text-purple-800">
            <v-icon :icon="route.icon"></v-icon>
            <span  class="">{{ route.name }}</span>
          </div>
        </router-link>
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
.userProfil-img {
  margin: 10px;
  border-radius: 50%;
}
.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  background-color: rgb(239, 239, 239);
  display: flex;
  width: 256px;
  height: 40px;
  align-items: center;
  color: blue!;
}
.active::before {
  content: "";
  width: 5px;
  height: 40px;
  background-color: #4f359b;
  border-radius: 0 3px 3px 0;
}

.user-icon {
  text-decoration: none;
  width: 256px;
  height: auto;
  padding: 10px 0;
  margin-bottom: 5px;
  cursor: pointer;
}
.user-icon > a {
  text-decoration: none !important;
}
.fill-height {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
