<template>
    <div class="glitch-wrapper">
      <p><slot></slot></p>
    </div>
</template>
  
<script setup lang="ts">
    defineProps({text:{type: String,default: 'PsychoGlitch'}});
</script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Bungee+Shade');
  
  /* 変数定義 */
  :root {
    --f-size: 15;
    --f-unit: 1vmin;
    --f: calc(var(--f-size) * var(--f-unit));
    --bg: #181717;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  .glitch-wrapper {
    display: flex;
    background-color: var(--bg);
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Bungee Shade', cursive;
    font-size: var(--f);
  }
  
  p {
    flex: 1;
    line-height: 0.75;
    margin: auto;
    color: #1af0dc;
    text-align: center;
    transform: scaleX(var(--scale, 1));
    animation: glitch-p 11s infinite alternate;
    position: relative;
  }
  
  p::before,
  p::after {
    --top: 0;
    --left: 0;
    --v-height: 30%;
  
    --n-tenth: calc(var(--f-size) * 0.1 * var(--top));
    --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
    --b-cut: calc(var(--t-cut) + var(--v-height));
  
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
  
    transform: translateX(calc(var(--left) * 100%));
    filter: drop-shadow(0 0 transparent);
    text-shadow: calc(var(--left) * -3em) 0 0.02em lime,
                 calc(var(--left) * -6em) 0 0.02em #ff00e1;
    background-color: var(--bg);
    clip-path: polygon(0% var(--t-cut), 100% var(--t-cut), 100% var(--b-cut), 0% var(--b-cut));
  }
  
  p::before {
    animation: glitch-b 1.7s infinite alternate-reverse;
  }
  p::after {
    animation: glitch-a 3.1s infinite alternate;
  }
  
  @keyframes glitch-p {
    17% { --scale: .87; }
    31% { --scale: 1.1; }
    37% { --scale: 1.3; }
    47% { --scale: .91; }
    87% { --scale: 1; }
  }
  
  @keyframes glitch-a {
    10%,30%,50%,70%,90% { --top: 0; --left: 0; }
    0% { --v-height: 15%; }
    20% { --left: .005; }
    40% { --left: .01; --v-height: 20%; --top: 3; }
    60% { --left: .03; --v-height: 25%; --top: 6; }
    80% { --left: .07; --v-height: 5%; --top: 8; }
    100% { --left: .083; --v-height: 30%; --top: 1; }
  }
  
  @keyframes glitch-b {
    10%,30%,50%,70%,90% { --top: 0; --left: 0; }
    0% { --v-height: 15%; --top: 10; }
    20% { --left: -.005; }
    40% { --left: -.01; --v-height: 17%; --top: 3; }
    60% { --left: -.03; --v-height: 35%; --top: 6; }
    80% { --left: -.07; --v-height: 5%; --top: 8; }
    100% { --left: -.083; --v-height: 30%; --top: 1; }
  }
  </style>
  