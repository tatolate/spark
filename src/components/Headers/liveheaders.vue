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
       <img src="/image/icon1.png" class="header_icon1" :class="{inSide: inside}">
       <img src="/image/icon2.png" class="header_icon2">
       <img src="/image/icon3.png" class="header_icon3">
       <img src="/image/rogo_mirrow1.png" class="sns_logo" v-if="inside==false">
       <img src="/image/rogo_mirrow2.png" class="sns_logo" :class="{inSide: inside}" v-if="inside">
       <img src="https://placehold.jp/110x58.png" class="sns_live" v-if="inside==false">
       <img src="https://placehold.jp/3d4070/ffffff/110x58.png" class="sns_live" :class="{inSide: inside}" v-if="inside">
     </div>
   </header>
</template>


<style scoped>
header{
    position: relative;
}

.header_top{
    height: 163px;
    background-color: #5ce1e6;
}

.header_icon1{
     position: absolute;
     top: 37px;
     left: 15px;
     width: 37px;
     height: auto;
     border-radius: 100px;
}
 
   .header_icon2{
     position: absolute;
     top: 37px;
     left: 57px;
     width: 37px;
     height: auto;
     border-radius: 100px;
   }
 
   .header_icon3{
     position: absolute;
     top: 37px;
     left: 99px;
     width: 37px;
     height: auto;
     border-radius: 100px;
   }

   .sns_logo{
     position: absolute;
     width: 299px;
     height: auto;
     top: -150px;
     right: -45px;
     z-index: 10;
   }

.sns_live{
    float: right;
    margin-top: 90px;
    margin-right: 60px;
}

/* 裏側用 */
.header_top.inSide{
    height: 163px;
    background-color: black;
}

.sns_logo.inSide{
    float: right;
     position: absolute;
     width: 299px;
     height: auto;
     top: -150px;
     right: -30px;
     z-index: 10;
  }

   .header_icon1.inSide{
    filter: invert(100%);
   }
</style>