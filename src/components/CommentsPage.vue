<template>
  <div>
    <h2>Comments</h2>
    <div v-for="comment in userStore.comments" :key="comment.postId">
      <v-progress-linear
        v-if="loading"
        indeterminate
        color="yellow-darken-2"
      ></v-progress-linear>

      <p>
        <strong>{{ comment.name }}:</strong>
      </p>
      <p>
        {{ comment.body }}
      </p>
    </div>
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
