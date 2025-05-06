<script setup lang="ts">
import { ref, onMounted } from "vue";

// コメントリスト
const comments = ref<string[]>([
  "こんにちは！",
  "素晴らしい配信ですね！",
  "もっと見たいです！",
]);

// 新しいコメントを追加する関数
const addComment = (newComment: string) => {
  comments.value.push(newComment);
  // 古いコメントを削除して流れ続けるようにする
  if (comments.value.length > 10) {
    comments.value.shift();
  }
};

// デモ用に定期的にコメントを追加
onMounted(() => {
  setInterval(() => {
    const randomComments = [
    "一コメ！",
    "面白い！",
    "いいね！",
    "すごく楽しい！",
    "最高の配信！",
    "応援しています！",
    "素晴らしいですね！",
    "もっと頑張ってください！",
    "すごい！",
    "最高です！",
    "応援しています！",
    "楽しいですね！",
    "素敵な配信！",
    "面白い配信！",
    "もっと見たい！",
    "楽しい！",
    "最高！",
    "ガチうけるｗ",
    "神配信！",
    "爆笑ｗｗ",
    "やばｗ",
    "ガチで好きっす",
    "",
    "",
    "",
    "",
    ];
    const randomIndex = Math.floor(Math.random() * randomComments.length);
    addComment(randomComments[randomIndex]);
  }, 1000); // 秒ごとにコメントを追加
});
</script>

<template>
<div class="comment-section">
    <div
      v-for="(comment, index) in comments"
      :key="index"
      class="comment"
    >
      {{ comment }}
    </div>
  </div>
</template>

<style scoped>
.comment-section {
  position: relative;
  bottom: 100px;
  left: 10px;
  width: 300px;
  max-height: 90px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

.comment {
  animation: slide-up 1s linear;
  margin-bottom: 5px;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>