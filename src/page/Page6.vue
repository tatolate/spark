<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Motion } from '@motionone/vue';
import scary_texts from "../assets/scary_texts.txt?raw";
const FadeIn = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1 } };
const showSecondMotion = ref(false);
const showText = ref("");
const TheEndOfPage = ref(false);
const TheEndOfWork = "本当に...貴方ですか？";
const TheEndOfPageTexts = scary_texts ? scary_texts.split("\n") : [];
const updateBitOfHorror = () => {
    for (let i = 0; i < TheEndOfWork.length; i++) {
        setTimeout(() => { showText.value = TheEndOfWork.slice(0, i + 1); }, 1000 + i * 100);
    }
    TheEndOfPage.value = true;
}
const NoiseAudio=new Audio;
NoiseAudio.src="/SOUND/background-sound.mp3"
const updateScaryText2 = () => {
    const newH1 = document.createElement("h1");
    newH1.textContent = TheEndOfPageTexts[Math.floor(Math.random() * TheEndOfPageTexts.length)];
    newH1.style.color = "white";
    newH1.style.textAlign = "center";
    newH1.style.writingMode = "vertical-rl";
    newH1.style.whiteSpace = "nowrap";
    newH1.style.position = "absolute";
    newH1.style.top = `${Math.floor(Math.random() * (window.innerHeight))}px`;
    newH1.style.left = `${Math.floor(Math.random() * window.innerWidth) - 30}px`;
    const mainElement = document.querySelector("main");
    if (mainElement) {
        mainElement.appendChild(newH1);
        NoiseAudio.play();
    }
}
setTimeout(updateBitOfHorror, 1000);
onMounted(() => {
    setTimeout(() => {
        let interval = 1000;
        let finish_count = 0
        const spawnScaryTexts = () => {
            updateScaryText2();
            console.log(finish_count)
            if (finish_count < 10) { interval = Math.max(10, interval * 0.75); }
            else if (finish_count < 100) { interval = Math.max(10, interval * 0.125); }
            else if (finish_count < 150) {
                interval = Math.max(10, interval * 0.03125);
                for (let i = 0; i < 40; i++) {
                    updateScaryText2();
                }
            }
            else if (finish_count == 150) { location.reload(); }
            setTimeout(spawnScaryTexts, interval);
            finish_count++;
        };
        spawnScaryTexts();
    }, 10000);
});

</script>

<template>
    <main>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
            <Motion v-bind="FadeIn" @motionend="showSecondMotion = true">
                <h1 style="color: white;">画面の中の<span style="color:red;">貴方</span>って...</h1>
            </Motion>
            <h1 class="BitOfHorror" style="color: white;">{{ showText }}</h1>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: black;
    height: 100vh;
    width: 100vw;
    margin: 0;
    overflow: hidden !important;
    overscroll-behavior: none;
    position: relative;
}

html,
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* ページ全体のスクロールを禁止 */
    height: 100%;
    /* 高さを100%に設定 */
}

.TheEnd {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 20px;
}
</style>