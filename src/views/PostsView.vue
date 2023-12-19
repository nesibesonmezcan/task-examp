<template>
  <div class="post-page" v-for="post in userStore.posts" :key="post.id">
    <div>
      <h4>{{ post.title }}</h4>
      <p>{{ post.body }}</p>
    </div>
    <div @click="openDialog(post)" class="post-button">
      <v-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 1C17.2 1 19 2.8 19 10C19 17.2 17.2 19 10 19C2.8 19 1 17.2 1 10C1 2.8 2.8 1 10 1Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </v-icon>
      <h5>See More</h5>
    </div>
  </div>

  <v-dialog width="500" v-model="dialog">
    <v-card>
      <CommentsPage :selectedPost="selectedPost"></CommentsPage>
    </v-card>
  </v-dialog>
</template>

<script setup>
import CommentsPage from "@/components/CommentsPage";
import { useUserStore } from "@/store/userStore";
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const dialog = ref(false);
const userStore = useUserStore();

// selectedPost değerini userStore içinden alınan değerle senkronize etme
const selectedPost = computed(() => userStore.selectedPost.title);

onBeforeMount(async () => {
  const userId = route.params.user_id;
  const filter = {
    userId: userId,
  };
  await userStore.fetchPosts(filter);
});

const openDialog = (post) => {
  // userStore içindeki selectedPost değerini güncelleme
  userStore.selectedPost = post;
  // Dialog açma işlemi
  dialog.value = true;
};
</script>

<style>
.post-page {
  padding: 15px;
}

.post-button {
  display: flex;
  justify-content: flex-end;
  /* "end" yerine "flex-end" kullanımı */
  align-items: center;
}
</style>
