<script setup lang="ts">
import Comment from '../../src/components/bodys/comment2.vue';
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
  <div class="frame4">
  <Comment />
  </div>
  <div class="frame3">
  <bad class="bad"/>
  </div>
  <div class="frame5">
  <button @click="$emit('nextpage')">現実に戻る</button>
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
  z-index: 10;
  height: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.frame5{
  position: relative;
  }
</style>