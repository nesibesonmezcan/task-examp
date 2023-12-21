<template>
  <div class="post-page" v-for="post in userStore.posts" :key="post.id">
    <div>
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
    <div @click="getSelectedPost(post.id)" class="post-button">
      <v-btn rounded="sm" icon="mdi-arrow-right"></v-btn>
      <h5>See More</h5>
    </div>

    <v-dialog width="1100" height="auto" v-model="dialog">
      <v-card>
        <div>
          <h2>Post Title</h2>
          <v-row class="post-comment">
            <v-col>
              <p>{{ post.title }}</p>
            </v-col>
            <v-col>
              <CommentsPage :selectedPostId="selectedPostId"></CommentsPage>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import CommentsPage from "@/components/CommentsPage";
import { useUserStore } from "@/store/userStore";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const dialog = ref(false);
const userStore = useUserStore();

onBeforeMount(async () => {
  const userId = route.params.user_id;
  const filter = {
    userId: userId,
  };
  await userStore.fetchPosts(filter);
});

const selectedPostId = ref(); // Seçilen postun ID'sini tutacak referans

const getSelectedPost = (postId) => {
  dialog.value = true;
  selectedPostId.value = postId;
};
</script>

<style>
h1 {
  margin: 5px;
  padding: 5px;
  margin-left: 15px;
}
.post-page {
  padding: 15px;
}
.post-comment {
  padding: 5px;
  margin: 5px;
}
.post-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
