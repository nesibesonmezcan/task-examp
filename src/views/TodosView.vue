<template>
  <div class="" v-for="todo in userStore.todos" :key="todo.id">
    <v-checkbox class="h-12 ml-8 text-purple-900 " v-model="todo.completed">
      <template v-slot:label >
        <div class=" leading-5 font-normal text-sm text-black"> Lorem ipsum dolor sit amet consectetur.
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
});
</script>

<style scoped>

</style>
