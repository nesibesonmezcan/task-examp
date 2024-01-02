<template>
  <div class="exam-question" v-for="todo in userStore.todos" :key="todo.id">
    <v-checkbox class="" v-model="todo.completed">
      <template v-slot:label>
        {{ todo.title }}
      </template>
    </v-checkbox>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/store/userStore";
import { useRoute } from "vue-router";
const userStore = useUserStore();
const loading = ref(false);
const route = useRoute();

onBeforeMount(async () => {
  loading.value = true;

  const userId = route.params.user_id;

  const filter = {
    userId: userId,
  };

  await userStore.fetchTodos(filter);
  loading.value = false;
  console.log("la beb", route.params.user_id);
});
</script>

<style scoped></style>
