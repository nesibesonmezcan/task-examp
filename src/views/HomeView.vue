<template>
  <v-main>
    <v-container>
      <h2 class="pa-4">All Users</h2>
      <v-row class="card-row">
        <v-progress-linear v-if="loading" indeterminate color="yellow-darken-2"></v-progress-linear>
        <v-col v-else v-for="user in userStore.users" :key="user.id" cols="4">
          <RouterLink :to="{ name: 'user-view', params: { user_id: user.id } }" class="router-link">
            <v-card @click=" goToDetail(user)" height="300" width="300" class="card-user">
              <v-row class="top-user">
                <v-col>
                  <v-img src="/clean1.jpg" class="user-logo-img" height="90" width="90" />
                </v-col>
                <v-col>
                  <v-card-title>{{ user.name }}</v-card-title>
                  <v-card-subtitle>{{ user.address.zipcode }}</v-card-subtitle>
                  <v-card-subtitle>{{ user.email }}</v-card-subtitle>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h3>Location</h3>
                  {{ user.address.city }}
                  <h3>Company</h3>
                  {{ user.company.name }}
                  <h3>website</h3>
                  {{ user.website }}
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
import { onMounted, ref } from 'vue';

// 'useUserStore' mağazasını içe aktarıyoruz, bu mağaza Vue bileşenindeki kullanıcı durumunu yönetmek için kullanılır
import { useUserStore } from "@/store/userStore"

const userStore = useUserStore();
const loading = ref(false);

onMounted(async () => {

  console.log("calisti")
  loading.value = true
  // await userStore.fetchUsers();
  loading.value = false
});

const goToDetail = (user) => {
  userStore.selectedUser = user;
}


</script>
<style>
.top-user {
  flex-wrap: nowrap;
}

.router-link {
  text-decoration: none;
}

.user-logo-img {
  border-radius: 50%;
}

.card-user {
  bottom: 2px solid black;
  margin: 5px;
  padding: 15px;
}
</style>