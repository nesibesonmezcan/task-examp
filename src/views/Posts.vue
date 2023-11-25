<template>
  <v-container>
    <main>
      <UserGo @click="router.push(`/`)" />
      <v-dialog width="500">
        <template v-slot:activator="{ props }" >
          <v-btn v-bind="props" text=""> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Dialog">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </main>
  </v-container>
</template>
  
<script setup>
import UserGo from '@/components/UserGo.vue'
import router from '@/router';


</script>
  
<style scoped>
div {
  padding: 25px;
}
</style>
  