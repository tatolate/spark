<script setup lang="ts">
defineProps({
  inside: { 
    type:Boolean,
    required: true,
   },
})
</script>

<template>
   <header>
     <div class="header_top" :class="{inSide: inside}">
       <img src="https://placehold.jp/37x37.png" class="header_icon1">
       <img src="https://placehold.jp/37x37.png" class="header_icon2">
       <img src="https://placehold.jp/37x37.png" class="header_icon3">
       <img src="https://placehold.jp/237x68.png" class="sns_logo">
     </div>
   </header>
</template>


<style scoped>
header{
    position: relative;
}

.header_top{
    height: 110px;
    background-color: #5ce1e6;
}

.header_icon1{
    position: absolute;
    top: 37px;
    left: 5px;
    border-radius: 100px;
}

.header_icon2{
    position: absolute;
    top: 37px;
    left: 47px;
    border-radius: 100px;
}

.header_icon3{
    position: absolute;
    top: 37px;
    left: 89px;
    border-radius: 100px;
}

.sns_logo{
    float: right;
    position: absolute;
    top: 16px;
    right: 17px;
}

.header_top.inSide{
    height: 110px;
    background-color: black;
}
</style>