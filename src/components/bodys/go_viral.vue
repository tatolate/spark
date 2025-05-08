<script setup lang="ts">
defineProps({
  inside: { 
    type:Boolean,
    required: true,
   },
})
</script>

<template>
    <div class="gradient" :class="{inSide: inside}">
        <h1>あなたもバズる？</h1>
    </div>
</template>
<style scoped>
.gradient{
    position: relative;
    text-align: center;
    background: linear-gradient(white, black 70%); 
    padding-bottom: 1000px;
}

.gradient h1{
    position: absolute;
    color: #d10a14;
    top: 550px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

/* ここから裏側投稿用 */
.gradient.inSide{
    position: relative;
    text-align: center;
    background: linear-gradient(#790000, black 70%); 
    padding-bottom: 1000px;
}

.gradient.inSide h1{
    position: absolute;
    color: #C0C0C0;
    top: 550px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

h1, button{
    font-family: monospace;
    font-weight:bold;
    }

    h1::before{
    -webkit-filter: blur(7px);
    -moz-filter: blur(7px);
    -o-filter: blur(7x);
    -ms-filter: blur(7px);
    filter: blur(7px);
    display:block;
    position:absolute;
    z-index:-1;
    font-size:70px;
    left:0px;
    right:0px;
    margin-top:-30px;
    opacity:.5;
  }

  h1{
    position:relative;
    z-index:2;
    opacity:.9;
    margin:0 auto;
    text-shadow:0px 0px 3px white;
    animation:glitch 3s infinite;
    cursor:pointer;
    font-size:30px;
    }
    
    /* グリッチエフェクト */
    h1 {
    position: relative;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    animation: glitch 3s infinite;
    cursor: pointer;
    margin: 0 auto;
    z-index: 2;
    opacity: 0.9;
    text-shadow: none;
    }

    h1::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    font-size: 132px;
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
