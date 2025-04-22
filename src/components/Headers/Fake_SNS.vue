<template>
   <header>
     <div class="header_top">
       <img src="https://placehold.jp/37x37.png" class="icon1">
       <img src="https://placehold.jp/37x37.png" class="icon2">
       <img src="https://placehold.jp/37x37.png" class="icon3">
       <img src="https://placehold.jp/237x68.png" class="logo">
     </div>
     <div class="header_div">
        <ul class="header_ul">
          <li class="header_button1">NOW TREND?</li>
          <li class="header_button2">What are they?</li>
          <li class="header_button3">What are you?</li>
        </ul>
      </div>
   </header>
   <body>
    <img src="https://placehold.jp/50x50.png">
   </body>
</template>

<script>
export default {};
</script>

<style>
  header{
     position: relative;
     height: 98px;
     background-color: aqua;
  }
 
  .icon1{
     position: absolute;
     top: 37px;
     left: 5px;
     border-radius: 100px;
}
 
   .icon2{
     position: absolute;
     top: 37px;
     left: 47px;
     border-radius: 100px;
   }
 
   .icon3{
     position: absolute;
     top: 37px;
     left: 89px;
     border-radius: 100px;
   }
 
   .logo{
     float: right;
     position: absolute;
     top: 16px;
     right: 17px;
   }


   .header_ul{
    display: flex;
    position: relative;
    top: 100px;
    font-size: 13px;
    color: white;
    list-style: none;
    background-color: aqua;
   }
   
   .header_button1{
    
    text-align: center;
    width: 33%;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }
   .header_button2{
    
    text-align: center;
    width: 33%;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }

   .header_button3{
    
    text-align: center;
    width: 33%;
    height: 40px;
    margin: 0px;
    padding: 0px;
    
    background-color: aqua;
    border: solid 7px yellow;
   }
</style>