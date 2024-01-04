<template>
  <div>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>

    <h4 class="size-lg leading-8 font-semibold text-red">Comments</h4>
    <div v-for="comment in userStore.comments" :key="comment.postId">
      <p><strong class="text-black-900 scroll-smooth">{{ comment.name }}:</strong></p>
      <p>{{ comment.body }}</p>
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
