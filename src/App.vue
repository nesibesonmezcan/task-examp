<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <div class="navigation-drawer">
        <component :is="dynamicComponent" />
        <div class="logo">
          <img src="/image 1.png" class="user-logo-img" />
          <p>N2MOBİL</p>

        </div>
      </div>

    </v-navigation-drawer>


    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import UserLeft from '@/components/UserLeft.vue'
import { RouterView } from "vue-router"
import { ref,shallowRef,watch } from 'vue';
import UserProfil from './components/UserProfil.vue';
import { useRoute } from 'vue-router'


const drawer = ref(true)
const route = useRoute()

watch(()=>
 route.name,
 ()=>{
  if (route.name === "home") {
    dynamicComponent.value= (UserLeft)
  } else {
     dynamicComponent.value=(UserProfil)
  }
})

const dynamicComponent = shallowRef(UserLeft)
</script>

<style>
#inspire {}

.navigation-drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  background-color: #D8D9DD;
}

.logo {
  display: flex;

  align-items: center;
  justify-content: space-between;
}

.logo {}
</style>