<template>
  <div class="post-page ml-8 ma-0" v-for="post in userStore.posts" :key="post.id">
    <div>
      <div cols="6">
        <div class="w-1/2">
          <h3 class="font-medium text-lg leading-5 racking-tighter">
            Post Title
          </h3>
          <p class="font-normal text-sm leading-5 racking-tighter">
            {{ post.title }}
          </p>
          <p class="font-normal text-sm leading-5 racking-tighter">
            {{ post.body }}
          </p>
        </div>
      </div>

      <div>
        <div @click="getSelectedPost(post)" class="post-button m-3">
          <v-icon
            class="rounded-lg border-2 border-purple-900 w-8 h-8"
            icon="mdi-arrow-right"
          >
          </v-icon>
          <p class="font-medium text-sm leading-5 p-6">See More</p>
        </div>
      </div>
    </div>
    <hr />
  </div>

  <v-dialog width="1000" height="auto" v-model="dialog">
    <v-card class="post-comment">
      <div class="flex justify-between m-3">
        <p class="font-medium text-2xl leading-5">Post Title</p>
      <div @click="closeDialog">
        <v-icon 
        class="rounded-lg border-2 border-purple-900 w-8 h-8"
        icon="mdi-alpha-x"
      >
      </v-icon>
      </div>
      </div>
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
const closeDialog =()=>{
  dialog.value = false;

}
</script>

<style scoped>

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
