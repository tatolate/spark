<script setup lang="ts">
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";
import Like from "../components/bodys/like.vue"


</script>

<template>
  <LiveHeader :inside="false"/>
  <FaceDetectionNoisever />
  <button @click="$emit('nextpage')">2ページ目</button>
  <like class="like"/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.like{
  float: right;
  margin-right: 15px;
}
</style>