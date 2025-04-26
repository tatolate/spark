<script setup lang="ts">
import FaceDetection from '../../src/components/FaceDetection.vue';


</script>

<template>
  <FaceDetection />
  <button @click="$emit('nextpage')">2ページ目</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
