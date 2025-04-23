以下のURLを参考にコンポーネントを作成
https://codepen.io/dmwhy/pen/oLMBEv
<template>
    <h1 class="glitch-text"><slot></slot></h1>
</template>

<script setup lang="ts">
    /*Vue繧峨＠縺上さ繝ｳ繝昴�ｼ繝阪Φ繝医↓郤上ａ繧阪→T蜈育函縺ｫ險繧上ｌ縺溘∽ｻ頑律菴ｿ縺�蟋九ａ繧九Δ繧ｸ繝･繝ｼ繝ｫ縺ｧ縺昴％縺ｾ縺ｧ縺吶＄鬆�蠢懷�ｺ譚･繧九ｏ縺醍┌縺�縺�繧埼�ｭ貉ｧ縺�縺ｦ繧九�ｮ縺具ｼ�
    菴輔′縲祁ue縺�縺ｨ髢狗匱蜉ｹ邇�縺後＞縺�縲阪□髢狗匱蜉ｹ邇�縺御ｽ輔□縺ｯ邨碁ｨ楢�縺梧焚莠ｺ螻�縺ｦ蛻昴ａ縺ｦ謌舌ｊ遶九▽繧ゅｓ縺�繧阪≧縺後ユ繝｡繝ｼ縺ｯBrainFuck縺ｧ繧よ嶌縺�縺ｨ縺�*/
</script>

<script lang="ts">
export default {};
</script>

<style>
    .glitch-text, button{
    font-family: monospace;
    font-weight:bold;
    }

  .glitch-text::before{
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
    }
    
    /* グリッチエフェクト */
    .glitch-text {
    position: relative;
    font-size: 52px;
    font-weight: bold;
    text-transform: uppercase;
    animation: glitch 3s infinite;
    cursor: pointer;
    margin: 0 auto;
    z-index: 2;
    opacity: 0.9;
    text-shadow: none;
    }

    .glitch-text::before {
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