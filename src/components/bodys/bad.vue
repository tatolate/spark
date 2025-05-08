<script setup lang="ts">
import { ref, onMounted } from "vue";

// いいねのリストを管理
const bads = ref<number[]>([]);

// いいねを追加する関数
const addBad = () => {
  bads.value.push(Date.now()); // 一意の値をキーとして使用
  if (bads.value.length > 100) {
    bads.value.shift(); // 最大つまで保持
  }
};

// 一定間隔でいいねを追加
onMounted(() => {
  setInterval(addBad, 1000); // 1秒ごとにいいねを追加
});
</script>

<template>
<div class="main_bad">
    <img
      v-for="bad in bads"
      :key="bad"
      src="/image/bad.png"
      alt=""
      class="float_bad"
    />
    <img src="/image/bad.png" class="bad_btn" />
  </div>
</template>

<style scoped>
.main_bad{
  position: relative;
}

.float_bad{
    position: absolute;
    width: 30px;
    height: auto;
    margin-left: 15px;
    animation-name: likeheart;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    animation-iteration-count:infinite;
}

@keyframes likeheart {
  0%{
    transform: rotate(20deg);
    
  }
  
  70%{
    opacity: 0.5;
  }

  100%{
    transform: rotate(-40deg);
    transform: translateY(-300%);
    opacity: 0;
  }
}

.float_bad2{
    position: absolute;
    width: 30px;
    height: auto;
    margin-left: 15px;
    animation-name: likeheart2;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-timing-function: ease-out;
    animation-iteration-count:infinite;
}

@keyframes likeheart2 {
  0%{
    transform: rotate(-20deg);
  }
  
  70%{
    opacity: 0.5;
  }

  100%{
    transform: rotate(-40deg);
    transform: translateY(-300%);
    opacity: 0;
  }
}

.bad_btn{
  touch-action: manipulation;
  position: absolute;
  width: 60px;
  height: auto;
  background: none;
  cursor: pointer;
}

.bad_btn:active{
  transform: scale(0.8);
}


</style>