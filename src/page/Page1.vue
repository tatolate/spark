<script setup lang="ts">
import { Motion } from '@motionone/vue';
import { defineEmits } from 'vue';
const emit = defineEmits(['nextpage']);
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0 }
};
const experience = document.cookie
  .split('; ')
  .find(row => row.startsWith('experience='))
  ?.split('=')[1];

if (experience === 'true') {
  setTimeout(() => {
    emit('nextpage');
  }, 5000);
}
</script>

<template>
  <header>
    <div class="icon_title">
      <a href="#"><img src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt=""></a>
      <h1 style="margin-left: 10px;">React使おうぜ</h1>
    </div>
    <div class="menu">
      <div class="Maker">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          作品情報
        </button>
        <ul class="dropdown-menu">
          <li class="dropdown-item">作成者</li>
        </ul>
      </div>
    </div>
  </header>
  <main>
    <div class="TitleCall glitch-bg">
      <Motion :initial="fadeIn.initial" :animate="fadeIn.animate" :exit="fadeIn.exit">
        <h1 class="glitch-text">人間やめますか<br>バズりますか</h1>
      </Motion>
    </div>
  </main>
</template>

<style scoped>
  @keyframes noise{
  0% {background-position-y: 0px;}
  100% {background-position-y: -420px;}
  }
  header{
    position: relative;
    height: 75px;
    background-color: skyblue;
  }

   header .icon_title{
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    align-items: center;
  }

  header .icon_title img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }

  header .menu{
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  main{
    top: 0%;
  }
  main .TitleCall{
    background-image: url("https://t3.ftcdn.net/jpg/05/19/65/92/360_F_519659267_knsn5lLGlnDUOoxHiJsRoLFFt5PBKcmW.jpg");
    background-size: cover;
    background-position: center;
    height: 91vh;
    width: 100%;
    display: flex;
    align-items: center;
  }

  @keyframes noiseEffect {
    0% {
      background-image: url("https://mybook.co.jp/column/photography-technique/img/landscape3.jpg");
    }
    50% {
      background-image: url("https://via.placeholder.com/1920x1080?text=Noise");
    }
    100% {
      background-image: url("https://mybook.co.jp/column/photography-technique/img/landscape3.jpg");
    }
  }

  main .TitleCall.noise {
    animation: noiseEffect 0.5s ease-in-out;
  }

  .TitleCall h1 {
    font-size: 30px;
    margin-left:30px;
  }

  .glitch-text, button{
    font-family: monospace;
    font-weight:bold;
    }

  .glitch-text::before{
    color:black;
    -webkit-filter: blur(7px);
    -moz-filter: blur(7px);
    -o-filter: blur(7x);
    -ms-filter: blur(7px);
    filter: blur(7px);
    display:block;
    position:absolute;
    z-index:-1;
    font-size:132px;
    left:0px;
    right:0px;
    margin-top:-30px;
    opacity:.5;
  }

  .glitch-text{
    position:relative;
    z-index:2;
    opacity:.9;
    margin:0 auto;
    text-shadow:0px 0px 3px white;
    animation:glitch 3s infinite;
    cursor:pointer;
    font-size:52px;
    color:white;
    }
    
/* グリッチエフェクト */
.glitch-text {
  position: relative;
  font-size: 52px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  animation: glitch 3s infinite;
  cursor: pointer;
  margin: 0 auto;
  z-index: 2;
  opacity: 0.9;
  text-shadow: none; /* 影を削除 */
}

.glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  font-size: 132px;
  color: black;
  opacity: 0.5;
  text-shadow: none; /* 影を削除 */
  filter: none; /* ぼかしを削除 */
}

@keyframes glitch {
  3% {
    transform: translate(7px, 7px);
  }
  6% {
    transform: translate(-9px, 4px) skewX(3240deg);
  }
  7% {
    transform: translate(3px, -4px);
  }
  9% {
    transform: translate(0px, 0px) skewX(0deg);
  }
  54% {
    transform: translateX(0px) skew(0deg);
  }
  55% {
    transform: translate(-2px, 6px) skew(-5530deg);
  }
  56% {
    transform: translate(0px, 0px) skew(0deg);
  }
  57% {
    transform: translate(4px, -10px) skew(-70deg);
  }
  58% {
    transform: translate(0px, 0px) skew(0deg);
  }
  62% {
    transform: translate(0px, 20px) skew(0deg);
  }
  63% {
    transform: translate(4px, -2px) skew(0deg);
  }
  64% {
    transform: translate(1px, 3px) skew(-230deg);
  }
  65% {
    transform: translate(-7px, 2px) skew(120deg);
  }
  66% {
    transform: translate(0px, 0px) skew(0deg);
  }
}
</style>
