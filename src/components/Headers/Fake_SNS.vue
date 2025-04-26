<template>
   <header>
     <div class="header_top">
       <img src="https://placehold.jp/37x37.png" class="header_icon1">
       <img src="https://placehold.jp/37x37.png" class="header_icon2">
       <img src="https://placehold.jp/37x37.png" class="header_icon3">
       <img src="https://placehold.jp/237x68.png" class="sns_logo">
     </div>
     <div class="header_div">
        <div class="header_ul">
          <div class="header_button1">NOW TREND?</div>
          <div class="header_button2">What are they?</div>
          <div class="header_button3">What are you?</div>
        </div>
      </div>
   </header>
</template>

<script>
export default {};
</script>

<style>
  header{
     position: relative;
     
  }
 
  .header_top{
    height: 98px;
    background-color: aqua;
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
    color: white;
    list-style: none;
    background-color: aqua;
   }
   
   .header_button1{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }
   .header_button2{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }

   .header_button3{
    
    text-align: center;
    flex:1;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }
</style>