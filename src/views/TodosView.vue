<template>
  <div class="exam-question" v-for="todo in userStore.todos" :key="todo.id">
    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          {{ todo.title }}
        </div>
      </template>
    </v-checkbox>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/store/userStore";
import { useRoute } from "vue-router";
const checkbox = ref(false);
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
