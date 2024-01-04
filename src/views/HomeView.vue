<template>
  <v-container>
    <h2 class="font-lg text-xl fond-semibold leading-5 font-poppins p-5">
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
          <v-card
          
            
            class="card-user rounded-xl !h-80 border-2 p-5 "
          >
            <div
              no-gutters="false"
              class="top-user flex align-center m-2 p-2"
            >
              <v-avatar class="h-25 w-25" image="/clean1.jpg" />
              <div class="user-profil-name justify-center align-center ml-5">
                <div class="font-medium leading- text-sm g-2">
                  {{ user.name }}
                </div>
                <p class="font-light text-sm leading-3">
                  {{ user.address.zipcode }}
                </p>
                <p class="font-light text-sm leading-3">{{ user.email }}</p>
              </div>
            </div>
            <v-row>
              <v-col class="peg2rsonal-information text-sm g-2">
                <div class="font-medium leading- text-sm m-3">
                  <v-icon rounded="md" left>mdi-map-marker</v-icon>
                  Location
                  <p class="font-light text-sm leading-3">
                    {{ user.address.city }}
                  </p>
                </div>
                <div class="font-medium leading- text-sm m-3">
                  <v-icon rounded="md" left>mdi-domain</v-icon>
                  Company
                  <p class="font-light text-sm leading-3">
                    {{ user.company.name }}
                  </p>
                </div>
                <div class="font-medium leading- text-sm m-3">
                  <v-icon rounded="md" left>mdi-earth</v-icon>
                  Website
                  <p class="font-light text-sm leading-3">{{ user.website }}</p>
                </div>
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
.router-link {
  text-decoration: none;
}

.card-user {
  bottom: 2px solid black;
  margin: 5px;
  padding: 15px;
}
</style>
