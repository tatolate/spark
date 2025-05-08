<script setup lang="ts">
import Comment from '../../src/components/bodys/comment1.vue';
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever1.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";
import Like from "../components/bodys/like.vue"

import { ref, onMounted } from "vue";

// frame5 の表示状態を管理するフラグ
const showFrame3 = ref(false);
const showFrame4 = ref(false);
const showFrame5 = ref(false);

onMounted(() => {
  // 10秒後に frame5 を表示
  setTimeout(() => {
    showFrame5.value = true;
  }, 30000); // ミリ秒 (秒)

  // 秒後に frame4 を表示
  setTimeout(() => {
    showFrame4.value = true;
  }, 3000); // ミリ秒 (秒)

  setTimeout(() => {
    showFrame3.value = true;
  }, 3000); // ミリ秒 (秒)
});


</script>

<template>
  <div class="all-frame">
  <div class="frame1">
  <LiveHeader :inside="false"/>
  </div>
  <div class="frame2">
  <FaceDetectionNoisever />
  </div>
  <div v-if="showFrame4" class="frame4">
  <Comment />
  </div>
  <div v-if="showFrame3" class="frame3">
  <like class="like"/>
  </div>
  <div v-if="showFrame5" class="frame5">
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
  top: 50%; /* 親要素の高さの50% */
  left: 50%; /* 親要素の幅の50% */
  transform: translate(-50%, -50%); /* 要素の中心を基準に移動 */
  text-align: center; /* テキストを中央揃え */
  }
</style>