<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>

    <h4 class="text-black-900">Comments</h4>
    <div v-for="comment in userStore.comments" :key="comment.postId">
      <strong class="text-black-300">{{ comment.name }}:</strong>
      {{ comment.body }}
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/userStore";
import { onMounted, ref, defineProps } from "vue";

const userStore = useUserStore();
const loading = ref(false);
const props = defineProps({
  selectedPost: Object,
});

onMounted(async () => {
  loading.value = true;
  await userStore.fetchComments({
    postId: props.selectedPost.id,
  });
  loading.value = false;
});
</script>
