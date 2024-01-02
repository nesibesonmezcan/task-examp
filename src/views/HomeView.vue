<template>
  <v-container>
    <h2
      class="text-bold py-2 px-5"
    >
      All Users
    </h2>
    <v-row class="card-row">
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="yellow-darken-2"
      ></v-progress-linear>
      <v-col v-for="user in userStore.users" :key="user.id" cols="4">
        <RouterLink
          :to="{ name: 'user-view', params: { user_id: user.id } }"
          class="router-link"
        >
          <v-card height="350" width="auto" class="card-user" no-gutter>
            <v-row no-gutters="false" class="top-user">
              <v-avatar size="100" image="/clean1.jpg" />
              <v-col class="user-profil-name">
                <v-card-title class="ellipsis">{{ user.name }}</v-card-title>
                <v-card-subtitle class="ellipsis">{{
                  user.address.zipcode
                }}</v-card-subtitle>
                <v-card-subtitle class="ellipsis">{{
                  user.email
                }}</v-card-subtitle>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="p-3 personal-information">
                <v-card-title>
                  <v-icon rounded="md" left>mdi-map-marker</v-icon>
                  Location
                </v-card-title>
                <v-card-subtitle> {{ user.address.city }}</v-card-subtitle>
                <v-card-title>
                  <v-icon rounded="md" left>mdi-domain</v-icon>
                  Company
                </v-card-title>
                <v-card-subtitle> {{ user.company.name }}</v-card-subtitle>
                <v-card-title>
                  <v-icon rounded="md" left>mdi-earth</v-icon>
                  Website
                </v-card-title>
                <v-card-subtitle> {{ user.website }} </v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/store/userStore";

const userStore = useUserStore();
const loading = ref(false);

onBeforeMount(async () => {
  loading.value = true;
  await userStore.fetchUsers();
  loading.value = false;
});
</script>

<style scoped>
.ellipsis {
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.top-user {
  text-wrap: nowrap !important;
  overflow: hidden !important;
}

.router-link {
  text-decoration: none;
}

.user-logo-img {
  border: 1px solid red;
  border-radius: 50%;
  margin: 15px;
}
.user-logo-img > div > img.v-img__img--contain {
  object-fit: inherit !important;
  background-color: red !important;
}
.card-user {
  bottom: 2px solid black;
  margin: 5px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.219) !important;
}
.user-profil-name {
}
.user-profil-name.v-card-title {
  background-color: blueviolet !important;
}
.personal-information > .v-card-title {
  font-weight: 400;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}
</style>
