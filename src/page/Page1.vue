<script setup lang="ts">
  import { Motion } from '@motionone/vue';
  import { defineEmits } from 'vue';
  import Header from '../components/Headers/Artwork.vue';
  import NotFoundNoise from '../components/Noise/tachihara.vue';
  import WholeNoise from '../components/Noise/WholeNoise.vue';
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
  <Header/>
  <main>
    <WholeNoise/>
    <div class="TitleCall">
      <Motion :initial="fadeIn.initial" :animate="fadeIn.animate" :exit="fadeIn.exit">
        <NotFoundNoise class="title"> Reactを使いませんか？<br>宗教上の理由でVueを扱えないんです。 </NotFoundNoise>
      </Motion>
    </div>
  </main>
</template>

<style scoped>
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
    color: white;
  }
</style>