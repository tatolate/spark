<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, h, type VNode } from "vue";
import {
  FaceDetector,
  FilesetResolver,
  type Detection,
  type FaceDetectorResult,
} from "@mediapipe/tasks-vision";

const colorMap: string[] = ["#FFD700", "#FF69B4", "#00FFFF", "#ADFF2F", "#FF4500", "#00ffff", "#00ff7f", "#00ff00"]; // キラキラ用の色

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
  generateRandomSparkles(); // ランダムな位置にエフェクトを生成
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
    const demosSection = document.getElementById("demos");
    if (demosSection) {
      demosSection.classList.remove("invisible");
    }
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

  // 顔検出結果に基づくエフェクト
  detections.forEach((detection) => {
    if (!detection.boundingBox) return;

    const displayWidth = video.offsetWidth;
    const displayHeight = video.offsetHeight;

    const scale =
      displayWidth / video.videoWidth > displayHeight / video.videoHeight
        ? displayHeight / video.videoHeight
        : displayWidth / video.videoWidth;

    const mirroredOriginX =
      video.videoWidth -
      detection.boundingBox.originX -
      detection.boundingBox.width;

    const boxWidth = detection.boundingBox.width * scale;
    const boxHeight = detection.boundingBox.height * scale;
    const boxLeft = mirroredOriginX * scale;
    const boxTop = detection.boundingBox.originY * scale;

    const sparkleWrapperVNode = h(
      "div",
      {
        style: {
          position: "absolute",
          left: `${boxLeft}px`,
          top: `${boxTop}px`,
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          pointerEvents: "none",
          zIndex: "1",
        },
      },
      [h(SparkleEffect, { width: `${boxWidth}px`, height: `${boxHeight}px` })]
    );

    children.value.push(sparkleWrapperVNode);
  });
};

// ランダムな位置にエフェクトを生成
const generateRandomSparkles = () => {
  const randomSparkleCount = 10; // ランダムに生成するエフェクトの数
  const liveView = liveViewRef.value;

  if (!liveView) return;

  for (let i = 0; i < randomSparkleCount; i++) {
    const randomWidth = Math.random() * liveView.offsetWidth;
    const randomHeight = Math.random() * liveView.offsetHeight;

    const sparkleWrapperVNode = h(
      "div",
      {
        style: {
          position: "absolute",
          left: `${randomWidth}px`,
          top: `${randomHeight}px`,
          width: "50px",
          height: "50px",
          pointerEvents: "none",
          zIndex: "1",
        },
      },
      [h(SparkleEffect, { width: "50px", height: "50px" })]
    );

    children.value.push(sparkleWrapperVNode);
  }
};

const SparkleEffect = (props: { width: string; height: string }) => {
  const sparkleElements = [];
  const sparkleCount = 20; // Number of sparkles

  for (let i = 0; i < sparkleCount; i++) {
    const sparkleVNode = h("div", {
      class: "sparkle",
      style: {
        position: "absolute",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
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