<template>
  <v-main>

    <div class="post-page" v-for="post in userStore.posts" :key="post.id">
      <div>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
      <div class="post-button">
        <h5>See More</h5>


        <v-dialog width="500">
          <template v-slot:activator="{ props }">
            <v-btn class="post-icon" v-bind="props" rounded="sm" icon="mdi-arrow-right-bold-circle-outline"> </v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
              <v-btn icon="mdi-close-circle-outline" @click="isActive.value = false"></v-btn>
              <v-card-text>
                {{ post.body }}
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>


              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

      </div>
    </div>



  </v-main>
</template>
  
<script setup>
import { useUserStore } from "@/store/userStore";
import { onBeforeMount } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute()
const userStore = useUserStore();

console.log(" la ibo", route.meta);

onBeforeMount(async () => {
  const userId = route.params.user_id
  const filter = {
    userId: userId,
  }
  console.log("filterpost", filter)
  await userStore.fetchPosts(filter);
});
</script>

<style>
.post-page {
  padding: 15px;
}

.post-button {
  display: flex;
  justify-content: end;
  align-items: center;
}

.post-icon {
  background-color: none;
}
</style>
