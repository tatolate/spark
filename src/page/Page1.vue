<script setup lang="ts">

</script>

<template>
  <header>
    <div class="header_top">
      <img src="https://placehold.jp/37x37.png" class="icon1">
      <img src="https://placehold.jp/37x37.png" class="icon2">
      <img src="https://placehold.jp/37x37.png" class="icon3">
      <img src="https://placehold.jp/237x68.png" class="logo">
    </div>
    <div>
      <h2>a</h2>
    </div>
  </header>

  <button @click="$emit('nextpage')">2ページ目</button>
</template>

<style scoped>
  header{
    position: relative;
    height: 135px;
    background-color: aqua;
  }

  .icon1{
    position: absolute;
    top: 37px;
    left: 5px;
  }

  .icon2{
    position: absolute;
    top: 37px;
    left: 47px;
  }

  .icon3{
    position: absolute;
    top: 37px;
    left: 89px;
  }

  .logo{
    float: right;
    position: absolute;
    top: 16px;
    right: 17px;
  }

</style>
