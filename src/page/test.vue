<script setup lang="ts">
    import { onMounted } from 'vue';

    onMounted(() => {
        const videoElement = document.createElement('video');
        const canvas = document.getElementById('camera') as HTMLCanvasElement;
        const context = canvas.getContext('2d');

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                    videoElement.play();
                    const drawFrame = () => {
                        if (context) {
                            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
                            context.fillRect(0, 0, 50, 50);
                            requestAnimationFrame(drawFrame);
                        }
                    };
                    drawFrame();
                })
                .catch((err) => {
                    console.error('Error accessing the camera: ', err);
                });
        } else {
            console.error('getUserMedia is not supported in this browser.');
        }
    });
</script>

<template>
    <main>
        <canvas id="camera"></canvas>
    </main>
</template>

<style scoped>
    canvas{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>