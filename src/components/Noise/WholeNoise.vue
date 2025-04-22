<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
const Height = window.screen.height;
const Width = window.screen.width;
export default defineComponent({
    setup() {
        const fin_colors = ref<string[]>(['']);
        const target_colors = ref<number[]>([1]);
        let target_heights = ref<number[]>([0]);
        const target_widths = ref<number[]>([0]);
        const count = Math.floor(Math.random() * 240 + 1) + 1;
        const updateBackground = () => {
            for (let i=0; i<count; i++){
                target_heights.value[i] = Math.floor(Math.random() * Height);
                target_widths.value[i] = Math.floor(Math.random() * Width);
                target_colors.value[i] = Math.floor(Math.random() * 5) + 1;
                const colorMap: Record<number, string> = {
                    1: "#000000",
                    2: "#FFFFFF",
                    3: "#FF0000",
                    4: "#00FF00",
                    5: "#0000FF",
                };
                fin_colors.value[i] = colorMap[target_colors.value[i]];
            }
        };

        onMounted(() => {
            updateBackground();
            setInterval(updateBackground, 30);
        });

        return {
            Height,
            target_heights,
            target_widths,
            fin_colors,
            target_colors,
        };
    },
});
</script>

<template>
  <!-- 親コンテナにoverflow: hiddenを設定 -->
  <div class="noise-container">
    <div v-for="(color, index) in fin_colors" :key="index">
      <hr class="aaa" :style="{ borderTop: `2px solid ${color}`, transform: `translate(${target_widths[index]}px, ${target_heights[index]}px)` }">
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

.aaa {
  position: absolute;
  width: 100px;
  height: 3%;
  border: none;
}
</style>
