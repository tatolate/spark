<script setup lang="ts">
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever1.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";


</script>

<template>
  <LiveHeader :inside="false"/>
  <FaceDetectionNoisever />
  <button @click="$emit('nextpage')">2ページ目</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>