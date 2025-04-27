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
     <div class="header_div">
        <!-- 通常 -->
        <div class="header_ul" v-if="inside==false">
          <div class="header_button1" v-if="inside==false">NOW TREND?</div>
          <div class="header_button2" v-if="inside==false">What are they?</div>
          <div class="header_button3" v-if="inside==false">What are you?</div>
        </div>
        <!-- 裏側 -->
        <div class="header_inside" v-if="inside">
          <div class="header_inside1" v-if="inside">No Trend</div>
          <div class="header_inside2" v-if="inside">No one you</div>
          <div class="header_inside3" v-if="inside">No escape</div>
        </div>
      </div>
   </header>
</template>



<style scoped>
  header{
     position: relative;
     
  }
 
  .header_top{
    height: 98px;
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


   .header_ul{
    display: flex;
    position: relative;
    font-size: 13px;
    font-family: serif;
    color: white;
    list-style: none;
   }
   
   .header_button1{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: #5ce1e6;
    border: solid 7px #fffba7;
   }
   .header_button2{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: #5ce1e6;
    border: solid 7px #fffba7;
   }

   .header_button3{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: #5ce1e6;
    border: solid 7px #fffba7;
   }


   /* ここからヘッダー色変え用のスタイル */
   .header_top.inSide{
    height: 98px;
    background-color: black;
  }

  .header_inside{
    display: flex;
    position: relative;
    font-size: 13px;
    font-family: serif;
    color: white;
    list-style: none;
    background-color: black;
   }
   
   .header_inside1{
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    background-color: black;
    border: solid 7px red;
   }

   .header_inside2{
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    background-color: black;
    border: solid 7px red;
   }

   .header_inside3{
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    background-color: black;
    border: solid 7px red;
   }
</style>