<template>
    <div>
        <h2>Selected Post</h2>
        <div v-if="selectedPost">
            <h3>{{ selectedPost.title }}</h3>
            <p>{{ selectedPost.body }}</p>
            <h4>Comments</h4>
            <ul>
                <li v-for="comment in selectedPost.comments" :key="comment.id">
                    <strong>{{ comment.name }}:</strong> {{ comment.body }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>No post selected.</p>
        </div>
    </div>
</template>
  
<script setup>
import { useUserStore } from '@/store/userStore';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const userStore = useUserStore();
const route = useRoute();

const selectedPost = computed(() => {
    return userStore.selectedPostById(route.params.post_id);
});


</script>
