<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>
    <h2>Post Title</h2>
    <v-row>
      <v-col> </v-col>
      <v-col>
        <h4>Comments</h4>
        <div v-for="comment in userStore.comments" :key="comment.postId">
          <strong>{{ comment.name }}:</strong> {{ comment.body }}
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const loading = ref(false);
const props = defineProps(["selectedPostId"]);
onMounted(async () => {
  loading.value = true;
  await userStore.fetchComments({ postId: props.selectedPostId });
  loading.value = false;
});
</script>
