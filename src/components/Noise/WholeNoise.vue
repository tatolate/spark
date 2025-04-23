<script setup lang="ts">
import {ref, onMounted } from 'vue';
const Height = window.screen.height;
const Width = window.screen.width;
const colorMap: Record<number, string> = { 1: "#000000", 2: "#FFFFFF", 3: "#FF0000", 4: "#00FF00", 5: "#0000FF",6:"rgba(0,0,0,0)" };
const fin_colors = ref([""]);
const target_widths = ref(0);
const target_heights = ref(0);
const visible = ref("");
const count = 50;
const heightbool=ref(true);
const createColor = () => {const array = [];for (let index = 0; index < count; index++) {array.push(colorMap[Math.floor(Math.random() * Object.keys(colorMap).length) + 1]);}return array;}
const props = defineProps({mode: {type: Boolean,default: false}});
const updateBackground = () => {
  visible.value = "block"
  target_widths.value = Math.floor(Math.random() * Width) - 150;
  target_heights.value = Math.floor(Math.random() * Height);
  fin_colors.value = createColor();
  setTimeout(updateBackground2, 50);
  setTimeout(updateBackground2, 100);
  setTimeout(updateBackground2, 150);
  setTimeout(updateBackground2, 200);
  setTimeout(updateBackground3, 250);
};
const updateBackground2 = () => {
  //fin_colors.value = colorMap[Math.floor(Math.random() * 5) + 1];
  if (props.mode){target_heights.value += (Math.floor(Math.random() * 3) - 1) * 2;}
  else{if(heightbool.value){target_heights.value +=2;}else{target_heights.value -= 2}heightbool.value=!heightbool.value;}
}
const updateBackground3 = () => {
  visible.value = "none"
}

onMounted(() => {
  updateBackground();
  setInterval(updateBackground, 1000);
});
</script>

<template>
  <div class="noise-container">
    <!--Vueはこういう書き方をしなければいけないからあまり好きじゃない-->
    <div v-for="(color, index) in fin_colors" key="index">
      <div class="noise_border"
        :style="{ backgroundColor: color, top: `${target_heights}px`, left: `${target_widths + index * 10}px`, display: `${visible}` }">
      </div>
    </div>
  </div>
</template>

<style>
.noise-container {
  position: absolute;
  width: 100%;
  height: 80vh;
  overflow-x: hidden;
  overflow-y: hidden;
}

.noise_border {
  position: absolute;
  width: 10px;
  height: 2px;
  border: none;
  opacity: 0.8;
}
</style>
