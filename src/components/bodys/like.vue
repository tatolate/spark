<script setup lang="ts">

</script>

<template>
<div class="main_like">
  <img src="/image/like.png" alt="" class="float_like">
  <img src="/image/like.png" alt="" class="float_like2">
  <img src="/image/like.png" class="like_btn">
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
    transform: translateY(-300%);
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