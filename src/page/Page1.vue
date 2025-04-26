<script setup lang="ts">
import NotFoundNoise from "../components/Noise/404Noise.vue";
import { Motion } from '@motionone/vue';
import WholeNoise from "../components/Noise/WholeNoise.vue";
import { ref, onMounted } from "vue";

const showSecondMotion = ref(false);
onMounted(() => {
  setTimeout(() => {
    showSecondMotion.value = true;
  }, 3000); // 3 seconds delay
});

const FadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 }
};
</script>

<template>
  <div v-for="i in 5" :key="i">
    <WholeNoise />
  </div>
  <main>
    <div class="TitleCall">
      <Motion v-bind="FadeIn">
        <NotFoundNoise style="color: black; font-size: 30px;">人間やめますか<br>バズりますか。</NotFoundNoise>
      </Motion>
      <Motion
        v-bind="{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } }"
        v-show="showSecondMotion"
      >
        <NotFoundNoise
          @click="$emit('nextpage')"
          style="color: red; font-size: 25px; height: 30px; font-family: 'Hina Mincho', serif; font-weight: 400; font-style: normal;"
        >
          作品ヲミル
        </NotFoundNoise>
      </Motion>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hina+Mincho&display=swap');
main {
  top: 0%;
}

main .TitleCall {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

main .TitleCall > *:not(:last-child) {
  margin-bottom: 10px;
}
</style>
