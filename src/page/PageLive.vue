<script setup lang="ts">
import FaceDetection from '../../src/components/FaceDetection.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";


</script>

<template>
  <LiveHeader :inside="true"/>
  <FaceDetection />
  <button @click="$emit('nextpage')">2ページ目</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
