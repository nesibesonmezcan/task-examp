
<template>
<div>
  <UserGo   @click="router.push(`/`)" />
  <v-checkbox  
  v-for="exam in exams" 
  :key="exam"
   class=" exam-question" >
  {{ exam.title }}
  </v-checkbox>
</div>
</template>

<script setup>

import UserGo from '@/components/UserGo.vue'
import router from "@/router";
import examsData from "../data2.json"
import { ref } from 'vue'
const exams =ref(examsData)




</script>
<style scoped>
.container{background-color: red;}
.v-selection-control__wrapper{}
.exam-question{
  padding:10px 30px 10px 100px;
  width: auto !important;
}
.exam-question:first-child{padding-top: 50px;
 
}
</style>
