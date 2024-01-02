<template>
  <div class="post-page" v-for="post in userStore.posts" :key="post.id">
    <div>
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
    <div @click="getSelectedPost(post)" class="post-button">
      <v-btn rounded="sm" icon="mdi-arrow-right"></v-btn>
      <h5>See More</h5>
    </div>
  </div>

  <v-dialog width="1000" height="auto" v-model="dialog">
    <v-card class="post-comment"><h1>Post Title</h1>
      <v-row>
        
        <v-col>
          <div class="m-2">
            {{ selectedPost.title }}
          </div>
        </v-col>
        <v-col>
          <CommentsPage :selectedPost="selectedPost"></CommentsPage>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
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
  console.log("data", filter);
});

const selectedPost = ref();
const getSelectedPost = async (post) => {
  dialog.value = true;

  selectedPost.value = post;
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

<!-- <template>
  <div>
    <div class="post-page" v-for="post in userStore.posts" :key="post.id">
      <div>
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
      </div>
      <div @click="getSelectedPost(post.id)" class="post-button">
        <h5 class="px-3 text-sm md:text-base  ">See More</h5>
        <v-btn
          icon="mdi-arrow-right"
          class="rounded-lg border-indigo-500/75"
        ></v-btn>
      </div>

      <v-dialog width="1000" height="auto" v-model="dialog">
        <v-card class="post-comment">
          <CommentsPage
            :selectedPostId="selectedPostId"
            :postTitle="post.body"
          ></CommentsPage>
        </v-card> </v-dialog
      >
    </div>
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
const selectedPostId = ref();

const getSelectedPost = async (postId) => {
  dialog.value = true;
  //selectedPostId.value = postId;
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
</style> -->
