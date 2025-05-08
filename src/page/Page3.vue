<script setup lang="ts">
import Comment from '../../src/components/bodys/comment1.vue';
import FaceDetectionNoisever from '../../src/components/FaceDetectionNoisever1.vue';
import LiveHeader from "../components/Headers/liveheaders.vue";
import Like from "../components/bodys/like.vue"

import { ref, onMounted } from "vue";

const emit = defineEmits(["nextpage"]);

// frame5 の表示状態を管理するフラグ
const showFrame3 = ref(false);
const showFrame4 = ref(false);
const showFrame5 = ref(false);
const isBlackout = ref(false); // ブラックアウト用のフラグ

const frame5Text = ref("縺偵ｓ縺倥▽に戻る");
const glitchText = "偵ｓ縺倥縺にる戻▽"; // 文字化け後の文字列

onMounted(() => {
  // 10秒後に frame5 を表示
  setTimeout(() => {
    showFrame5.value = true;
  }, 20000); // ミリ秒 (秒)

  // 秒後に frame4 を表示
  setTimeout(() => {
    showFrame4.value = true;
  }, 3000); // ミリ秒 (秒)

  setTimeout(() => {
    showFrame3.value = true;
  }, 3000); // ミリ秒 (秒)

  setInterval(() => {
    frame5Text.value = frame5Text.value === "縺偵ｓ縺倥▽に戻る" ? glitchText : "縺偵ｓ縺倥▽に戻る";
  }, 100); // 500msごとに切り替え
});

const goToNextPage = () => {
  isBlackout.value = true;
  setTimeout(() => {
    // ブラックアウト後に次のページに遷移
    emit("nextpage");
  }, 1000); // 1秒後に遷移
};

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
    <div @click="goToNextPage">{{ frame5Text }}</div>
    </div>
    <div v-if="isBlackout" class="blackout"></div>
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
  color: white;
  font-size: 23px;
  }

  .blackout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  animation: blackout-animation 2s forwards;
  z-index: 100; /* 他の要素の上に表示 */
}

@keyframes blackout-animation {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  20% {
    opacity: 0.3;
  }
  30% {
    opacity: 0.4;
  }
  40% {
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  70% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.1;
  }
  90% {
    opacity: 0.7;
  }
  97% {
    opacity: 0.5;
  }
  98% {
    opacity: 0.8;
  }
  99% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}



@keyframes noise-anim {
  0% {
    clip: rect(77px, 9999px, 6px, 0);
  }
  5% {
    clip: rect(65px, 9999px, 70px, 0);
  }
  10% {
    clip: rect(82px, 9999px, 82px, 0);
  }
  15% {
    clip: rect(32px, 9999px, 35px, 0);
  }
  20% {
    clip: rect(31px, 9999px, 49px, 0);
  }
  25% {
    clip: rect(18px, 9999px, 46px, 0);
  }
  30% {
    clip: rect(94px, 9999px, 64px, 0);
  }
  35% {
    clip: rect(69px, 9999px, 31px, 0);
  }
  40% {
    clip: rect(6px, 9999px, 72px, 0);
  }
  45% {
    clip: rect(25px, 9999px, 35px, 0);
  }
  50% {
    clip: rect(82px, 9999px, 26px, 0);
  }
  55% {
    clip: rect(7px, 9999px, 92px, 0);
  }
  60% {
    clip: rect(54px, 9999px, 30px, 0);
  }
  65% {
    clip: rect(86px, 9999px, 90px, 0);
  }
  70% {
    clip: rect(38px, 9999px, 65px, 0);
  }
  75% {
    clip: rect(41px, 9999px, 66px, 0);
  }
  80% {
    clip: rect(31px, 9999px, 37px, 0);
  }
  85% {
    clip: rect(8px, 9999px, 12px, 0);
  }
  90% {
    clip: rect(50px, 9999px, 69px, 0);
  }
  95% {
    clip: rect(7px, 9999px, 42px, 0);
  }
  100% {
    clip: rect(14px, 9999px, 57px, 0);
  }
}
.frame5:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(18px, 9999px, 13px, 0);
  }
  5% {
    clip: rect(74px, 9999px, 51px, 0);
  }
  10% {
    clip: rect(33px, 9999px, 65px, 0);
  }
  15% {
    clip: rect(64px, 9999px, 66px, 0);
  }
  20% {
    clip: rect(75px, 9999px, 6px, 0);
  }
  25% {
    clip: rect(40px, 9999px, 49px, 0);
  }
  30% {
    clip: rect(71px, 9999px, 1px, 0);
  }
  35% {
    clip: rect(42px, 9999px, 73px, 0);
  }
  40% {
    clip: rect(92px, 9999px, 57px, 0);
  }
  45% {
    clip: rect(4px, 9999px, 33px, 0);
  }
  50% {
    clip: rect(4px, 9999px, 34px, 0);
  }
  55% {
    clip: rect(49px, 9999px, 25px, 0);
  }
  60% {
    clip: rect(24px, 9999px, 44px, 0);
  }
  65% {
    clip: rect(31px, 9999px, 99px, 0);
  }
  70% {
    clip: rect(54px, 9999px, 83px, 0);
  }
  75% {
    clip: rect(57px, 9999px, 97px, 0);
  }
  80% {
    clip: rect(3px, 9999px, 15px, 0);
  }
  85% {
    clip: rect(84px, 9999px, 34px, 0);
  }
  90% {
    clip: rect(100px, 9999px, 88px, 0);
  }
  95% {
    clip: rect(91px, 9999px, 59px, 0);
  }
  100% {
    clip: rect(10px, 9999px, 87px, 0);
  }
}
.frame5:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
</style>