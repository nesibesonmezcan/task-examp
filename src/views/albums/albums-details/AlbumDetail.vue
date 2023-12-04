<template>
  <div>
    <v-btn @click="updateValue('x')">a</v-btn>
    <v-btn @click="updateValue('y')">b</v-btn>
    <v-btn @click="updateValue('z')">c</v-btn>
  </div>
  <div>
    <p>{{ currentValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ankara: {
        x: 3,
        y: 5,
        z: 8
      },
      currentValue: null
    };
  },
  methods: {
    updateValue(key) {
      this.currentValue = this.ankara[key];
    }
  }
};
</script>

