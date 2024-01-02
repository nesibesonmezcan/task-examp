<template>
  <div>
    <container>
      <div>ankara</div>
    </container>
  </div>
</template>

<script setup>
import { ref, onMounted, toRefs } from "vue";
import { useRoute } from "vue-router";

const { props } = useRoute();
const { thumbnailUrl } = toRefs(props);

const selectedPhotos = ref([]);

const selectRandomPhotos = () => {
  if (thumbnailUrl.value) {
    const shuffled = thumbnailUrl.value.sort(() => 0.5 - Math.random());
    selectedPhotos.value = shuffled.slice(0, 4);
  }
};

onMounted(() => {
  selectRandomPhotos();
});
</script>
