<script setup lang="ts">
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever2.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";
import bad from "../components/bodys/bad.vue"


</script>

<template>
  <div class="all-frame">
  <div class="frame1">
  <LiveHeader :inside="true"/>
  </div>
  <div class="frame2">
  <FaceDetectionNoisever />
  </div>
  <div class="frame3">
  <bad class="bad"/>
  </div>
  <div class="frame4">
  <button @click="$emit('nextpage')">2ページ目</button>
  </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.all-frame{
  overflow-x: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
}
.frame1{
  position: relative;
}
.frame2{
  position: relative;
  }
.frame3{
  position: relative;
  float: right;
  margin-right: 70px;
  bottom: 70px;
  }
.frame4{
  position: relative;
  }
</style>