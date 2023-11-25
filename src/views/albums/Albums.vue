<template>
    <v-container>
        <UserGo ></UserGo>
        <v-btn @click="router.push({ name: 'album-detail' })">Albums</v-btn>      
</v-container>
</template>
<script setup>
import { useRouter } from "vue-router";
import UserGo from "../../components/UserGo.vue"

const router = useRouter()






</script>