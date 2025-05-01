<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, h, type VNode } from "vue"; // h, VNode をインポート
import {
  FaceDetector,
  FilesetResolver,
  type Detection, // Changed: Added 'type' keyword
  type FaceDetectorResult, // Changed: Added 'type' keyword
} from "@mediapipe/tasks-vision";
const colorMap: Record<number, string> = {
  1: "#000000",
  2: "#FFFFFF",
  3: "#FF0000",
  4: "#8F0F0F",
  5: "#4a4a4a",
};

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
  await nextTick(); // Ensure DOM is updated before enabling webcam
  await enableCam();
  // Initialize Material Design Components (if needed, typically done globally)
  // const button = new MDCRipple(webcamButtonRef.value!); // Example
});

onBeforeUnmount(() => {
  // Cleanup resources if needed (e.g., stop webcam stream)
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
      // Use the CDN path instead of the local '/wasm' path
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm" // Or the specific version you are using
    );
    faceDetector = await FaceDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
        delegate: "GPU",
      },
      runningMode: runningMode.value,
    });
    console.log("FaceDetector initialized");
    // Make the demos section visible now that the detector is ready
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
  if (!videoRef.value){
    console.error("videoRef is null.");
    return;
  }

  webcamRunning.value = true;

  const constraints = { video: true };

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    videoRef.value.srcObject = stream;
    // The 'loadeddata' event listener is added in the template
  } catch (err) {
    console.error("getUserMedia error:", err);
    webcamRunning.value = false;
    alert("Could not access webcam.");
  }
};

const predictWebcam = async () => {
  if (!faceDetector || !videoRef.value || !liveViewRef.value) return;

  // Ensure running mode is VIDEO
  if (runningMode.value === "IMAGE") {
    await faceDetector.setOptions({ runningMode: "VIDEO" });
    runningMode.value = "VIDEO";
  }

  const video = videoRef.value;
  if (video.readyState < 2) {
    // Check if video is ready
    console.log("Video not ready yet");
    requestAnimationFrame(predictWebcam); // Try again on next frame
    return;
  }

  let startTimeMs = performance.now();
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;

    // Use await for async detection if available, otherwise handle promise
    try {
      const result: FaceDetectorResult = faceDetector.detectForVideo(
        video,
        startTimeMs
      );
      displayVideoDetections(result.detections);
    } catch (error) {
      console.error("Error during video detection:", error);
      // Handle potential errors during detection if necessary
    }
  }

  // Keep predicting if webcam is running
  if (webcamRunning.value) {
    requestAnimationFrame(predictWebcam);
  }
};

const displayVideoDetections = (detections: Detection[]) => {
  if (!liveViewRef.value || !videoRef.value) return;
  const video = videoRef.value;

  // Clear previous detections by clearing the VNode array
  children.value = []; // Clear VNodes

  // Log number of faces detected in the current frame
  if (detections.length > 0) {
    console.log(`Detected ${detections.length} faces in the video frame.`);
  }

  detections.forEach((detection, index) => {
    if (!detection.boundingBox) return;

    // Log bounding box coordinates for each face
    console.log(`Video Face ${index + 1} Bounding Box:`, {
      originX: detection.boundingBox.originX,
      originY: detection.boundingBox.originY,
      width: detection.boundingBox.width,
      height: detection.boundingBox.height,
    });

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

    const boxWidth = detection.boundingBox.width * scale;
    const boxHeight = detection.boundingBox.height * scale;
    const boxLeft = mirroredOriginX * scale;
    const boxTop = detection.boundingBox.originY * scale;

    // Create a VNode for the VideoNoise component wrapped in a positioned div
    const noiseWrapperVNode = h(
      'div', // Wrapper div for positioning
      {
        style: {
          position: 'absolute',
          left: `${boxLeft - leftmargin}px`,
          top: `${boxTop - topmargin}px`,
          width: `${boxWidth}px`, // Pass width to wrapper
          height: `${boxHeight}px`, // Pass height to wrapper
          // border: '2px solid rgba(255, 0, 0, 0.5)', // Optional: Add border for debugging
          // overflow: 'hidden', // Removed: Allow noise to overflow
          pointerEvents: 'none', // Prevent interaction with the wrapper
          zIndex: '1' // Add z-index to bring it to the front
        }
      },
      [ // Children of the wrapper div
        h(VideoNoise, { // The VideoNoise component itself
          width: `${boxWidth}px`, // Pass width prop
          height: `${boxHeight}px` // Pass height prop
        })
      ]
    );

    children.value.push(noiseWrapperVNode); // Add the wrapper VNode to the array
  });
};

// コンポーネント名をPascalCaseにするのが一般的です
const VideoNoise = (props: { width: string; height: string }) => {
  const noiseElements = [];
  const noiseCount = parseInt(props.height); // 高さを数値に変換

  const randomNumbers = [];
  for (let i = 0; i < noiseCount; i++) {
    // randomNumbers.push(parseInt(props.width, 10) + Math.floor(Math.random() * parseInt(props.width, 10)) + 1);
    randomNumbers.push(Math.floor(Math.random() * parseInt(props.width, 10)*2) + 1);
  }
  for (let i = 0; i < noiseCount; i++) {
      // h関数を使ってdiv要素のVNodeを生成
      const noiseVNode = h("div", {
        class: "noise", // CSSクラスを追加
        style: {
          position: "absolute", // 親要素内で絶対位置指定
          width: `${randomNumbers[i]}px`, // ランダムな幅を設定
          textAlign: "center",
          height: "20px",
          top: `${i}px`, // 各ノイズ要素のY位置を設定
          left: "50%", // 中央に配置
          transform: "translateX(-50%)", // 要素の幅の半分移動して中央に揃える
          backgroundColor: colorMap[Math.floor(Math.random() * 5) + 1], // ランダムな色を設定
          pointerEvents: "none", // クリックイベントを無効化
          zIndex: "1", // 他の要素の背後に表示
        },
      });
    noiseElements.push(noiseVNode);
  }

  // 親divを生成し、子要素としてnoiseElements配列を渡す
  return h(
    "div",
    {
      style: {
        position: "relative", // 子要素の絶対位置指定の基準とする
        width: props.width,
        height: props.height
      },
    },
    noiseElements // 生成したノイズ要素の配列を子要素として渡す
  );
};

// --- Utility Functions ---


</script>

<template>
  <section id="demos" class="invisible">
    <!-- Start invisible until initialized -->
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
      <!-- Render the VNodes stored in the children ref -->
      <component v-for="(child, index) in children" :key="index" :is="child" />
    </div>
  </section>
</template>

<style scoped>
.videoView {
  position: relative;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

#webcam {
  height: 100%;
  width:  100%;
  display: block;
  object-fit: cover;
}
</style>
