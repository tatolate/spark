<script setup lang="ts">
import { ref, onMounted } from "vue";

// いいねのリストを管理
const likes = ref<number[]>([]);

// いいねを追加する関数
const addLike = () => {
  likes.value.push(Date.now()); // 一意の値をキーとして使用
  if (likes.value.length > 50) {
    likes.value.shift(); // 最大つまで保持
  }
};

// 一定間隔でいいねを追加
onMounted(() => {
  setInterval(addLike, 1000); // 1秒ごとにいいねを追加
});
</script>

<template>
<div class="main_like">
    <img
      v-for="like in likes"
      :key="like"
      src="/image/like.png"
      alt=""
      class="float_like"
    />
    <img src="/image/like.png" class="like_btn" />
  </div>
</template>

<style scoped>
.main_like{
  position: relative;
}

.float_like{
    position: absolute;
    width: 30px;
    height: auto;
    margin-left: 15px;
    animation-name: likeheart;
    animation-duration: 3s;
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
    transform: translateY(-400%);
    opacity: 0;
  }
}

.float_like2{
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

.like_btn{
  touch-action: manipulation;
  position: absolute;
  width: 60px;
  height: auto;
  background: none;
  cursor: pointer;
}

.like_btn:active{
  transform: scale(0.8);
}


</style>