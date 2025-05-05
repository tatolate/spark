<script setup lang="ts">

</script>

<template>
<div class="main_bad">
  <img src="/image/bad.png" alt="" class="float_bad">
  <img src="/image/bad.png" alt="" class="float_bad2">
  <img src="/image/bad.png" class="bad_btn">
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