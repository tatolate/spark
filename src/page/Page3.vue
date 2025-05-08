<script setup lang="ts">
import Comment from '../../src/components/bodys/comment1.vue';
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever1.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";
import Like from "../components/bodys/like.vue"


</script>

<template>
  <div class="all-frame">
  <div class="frame1">
  <LiveHeader :inside="false"/>
  </div>
  <div class="frame2">
  <FaceDetectionNoisever />
  </div>
  <div class="frame4">
  <Comment />
  </div>
  <div class="frame3">
  <like class="like"/>
  </div>
  <div class="frame5">
  <div @click="$emit('nextpage')">縺偵ｓ縺倥▽に戻る</div>
  </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.all-frame{
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
}
.frame1{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 0%;

}
.frame2{
  position: absolute;
  top:163px;

  left:0;
  width: 100%;
  height: 82%;
  }
.frame3{
  position: absolute;
  float: right;
  right: 70px;
  bottom: 70px;
  }
.frame4{
  position: absolute;
  z-index: 10;
  bottom: 0px
}
.frame5{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  }
</style>