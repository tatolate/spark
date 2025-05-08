
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, h, type VNode } from "vue";
import {
  FaceDetector,
  FilesetResolver,
  type Detection,
  type FaceDetectorResult,
} from "@mediapipe/tasks-vision";

const colorMap: string[] = ["#FFFFFF"]; // キラキラ用の色

// --- Refs for DOM elements ---
const videoRef = ref<HTMLVideoElement | null>(null);
const liveViewRef = ref<HTMLDivElement | null>(null);
const children = ref<VNode[]>([]);

// --- MediaPipe State ---
let faceDetector: FaceDetector | undefined = undefined;
let runningMode = ref<"IMAGE" | "VIDEO">("IMAGE");
let webcamRunning = ref(false);
let lastVideoTime = -1;

// --- Initialization ---
onMounted(async () => {
  await initializeFaceDetector();
  await nextTick();
  await enableCam();
});

onBeforeUnmount(() => {
  if (videoRef.value?.srcObject) {
    (videoRef.value.srcObject as MediaStream)
      .getTracks()
      .forEach((track) => track.stop());
  }
  faceDetector?.close();
});

const initializeFaceDetector = async () => {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    );
    faceDetector = await FaceDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
        delegate: "GPU",
      },
      runningMode: runningMode.value,
    });
    console.log("FaceDetector initialized");
  } catch (error) {
    console.error("Failed to initialize FaceDetector:", error);
    alert("Failed to initialize FaceDetector. Check console for details.");
  }
};

const enableCam = async () => {
  if (!faceDetector) {
    alert("Face Detector is still loading. Please try again.");
    return;
  }
  if (!videoRef.value) {
    console.error("videoRef is null.");
    return;
  }

  webcamRunning.value = true;

  const constraints = { video: true };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    videoRef.value.srcObject = stream;
  } catch (err) {
    console.error("getUserMedia error:", err);
    webcamRunning.value = false;
    alert("Could not access webcam.");
  }
};

const predictWebcam = async () => {
  if (!faceDetector || !videoRef.value || !liveViewRef.value) return;

  if (runningMode.value === "IMAGE") {
    await faceDetector.setOptions({ runningMode: "VIDEO" });
    runningMode.value = "VIDEO";
  }

  const video = videoRef.value;
  if (video.readyState < 2) {
    requestAnimationFrame(predictWebcam);
    return;
  }

  let startTimeMs = performance.now();
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;

    try {
      const result: FaceDetectorResult = faceDetector.detectForVideo(
        video,
        startTimeMs
      );
      displayVideoDetections(result.detections);
    } catch (error) {
      console.error("Error during video detection:", error);
    }
  }

  if (webcamRunning.value) {
    requestAnimationFrame(predictWebcam);
  }
};

const displayVideoDetections = (detections: Detection[]) => {
  if (!liveViewRef.value || !videoRef.value) return;
  const video = videoRef.value;

  children.value = [];

  detections.forEach((detection) => {
    if (!detection.boundingBox) return;

    const displayWidth = video.offsetWidth;
    const displayHeight = video.offsetHeight;

    let scale: number;

if (displayHeight >= video.videoHeight && displayHeight >= displayWidth) {
  // displayWidthがvideo.videoWidthより長い場合
  scale = displayHeight / video.videoHeight;
} else {
  // displayHeightがvideo.videoHeightより長い場合
  scale = displayWidth / video.videoWidth;
}

    const blackVW =  video.videoWidth * scale;
    const blackVH  = video.videoHeight * scale;
    const topmargin = (blackVH - displayHeight) / 2;
    const leftmargin = (blackVW - displayWidth) / 2;

    const mirroredOriginX =
      video.videoWidth -
      detection.boundingBox.originX -
      detection.boundingBox.width;

 // expansionFactor倍に拡大
    const boxWidth = detection.boundingBox.width * scale;
    const boxHeight = detection.boundingBox.height * scale;
    const boxLeft = mirroredOriginX * scale;
    const boxTop = detection.boundingBox.originY * scale;

    const sparkleWrapperVNode = h(
      "div",
      {
        style: {
          position: "absolute",
          left: `${boxLeft - leftmargin}px`,
          top: `${boxTop - topmargin}px`,
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          pointerEvents: "none",
          transform: "translateX(-50%)",
          zIndex: "1",
        },
      },
      [h(SparkleEffect, { width: `${boxWidth * 3}px`, height: `${boxHeight * 1.1}px` })]
    );

    children.value.push(sparkleWrapperVNode);
  });
};

const SparkleEffect = (props: { width: string; height: string }) => {
  const sparkleElements = [];
  const sparkleCount = 30; // Number of sparkles

  for (let i = 0; i < sparkleCount; i++) {
    const sparkleVNode = h("div", {
      class: "sparkle",
      style: {
        position: "absolute",
        width: "40px",
        height: "40px",
        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // 星形
        backgroundColor: colorMap[Math.floor(Math.random() * colorMap.length)],
        top: `${Math.random() * parseInt(props.height)}px`,
        left: `${Math.random() * parseInt(props.width)}px`,
        animation: `sparkle-animation ${Math.random() * 2 + 1}s infinite`,
      },
    });
    sparkleElements.push(sparkleVNode);
  }

  return h(
    "div",
    {
      style: {
        position: "relative",
        width: props.width,
        height: props.height,
        overflow: "hidden",
      },
    },
    sparkleElements
  );
};
</script>

<template>
    <div
      ref="liveViewRef"
      id="liveView"
      class="videoView"
      style="position: relative"
    >
      <video
        ref="videoRef"
        id="webcam"
        autoplay
        playsinline
        @loadeddata="predictWebcam"
        style="transform: scaleX(-1)"
      ></video>
      <component v-for="(child, index) in children" :key="index" :is="child" />
    </div>
</template>

<style scoped>
.videoView {
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

#webcam {
  height: 100%;
  width:  100%;
  display: block;
  object-fit: cover;
}

.sparkle {
  animation: sparkle-animation 1.5s infinite;
}

@keyframes sparkle-animation {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
</style>
