<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Page1 from './page/Page1.vue';
import Page2 from './page/Page2.vue';
import Page3 from './page/Page3.vue';
import Page4 from './page/Page4.vue';
import Page5 from './page/Page5.vue';


const page_number = ref(1);
const contentData = ref<ContentDataType>({
  Accounts: [],
  PostContents_Front: [],
  PostContents_Back: []
});
const imagesLoaded = ref(false);

document.cookie = "experience=true; path=/";

const preloadImages = (resultData: ContentDataType) => {
  const preload = (src: string): HTMLImageElement => { const img = new Image(); img.src = src; return img; };

  resultData.Accounts.forEach(account => {
    if (account.image != "" && typeof account.image === 'string') {
      account.image = preload(account.image);
    }
  });

  resultData.PostContents_Front.forEach(post => {
    if (post.PostImage != "" && typeof post.PostImage === 'string') {
      post.PostImage = preload(post.PostImage);
    }
  });

  resultData.PostContents_Back.forEach(post => {
    if (post.PostImage != "" && typeof post.PostImage === 'string') {
      post.PostImage = preload(post.PostImage);
    }
  });
  return resultData;
};
onMounted(() => {
  // JSONデータを取得
  axios.get('/Content.json')
    .then(response => {
      const contentDat = preloadImages(response.data);
      console.log('Preloaded Data:', contentDat);
      contentData.value = contentDat;
    })
    .catch(error => {
      console.error('API取得エラー:', error);
    });
});

const checkImagesLoaded =()=>{
  let ComplateCount=0
  for (const acount of contentData.value.Accounts){
    if (acount.image instanceof HTMLImageElement) {
      acount.image.onload =() => {ComplateCount++};
    }else{ComplateCount++}
  }
  for (const post of contentData.value.PostContents_Front){
    if (post.PostImage instanceof HTMLImageElement) {
      post.PostImage.onload =() => {ComplateCount++};
    }else{ComplateCount++}
  }
  for (const post of contentData.value.PostContents_Back){
    if (post.PostImage instanceof HTMLImageElement) {
      post.PostImage.onload =() => {ComplateCount++};
    }else{ComplateCount++}
  }
  return ComplateCount;
}
const AllCounts=contentData.value.Accounts.length+contentData.value.PostContents_Front.length+contentData.value.PostContents_Back.length
const waitForImagesToLoad = async () => {
  while (checkImagesLoaded() == AllCounts) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  imagesLoaded.value = true;
};

waitForImagesToLoad();
</script>

<template>
  <Page1 @nextpage="page_number = 2" v-if="page_number == 1" :imagesLoaded="imagesLoaded" />
  <Page2 @nextpage="page_number++" v-if="page_number == 2" :contentdata="contentData" />
  <Page3 @nextpage="page_number++" v-if="page_number == 3" />
  <Page4 @nextpage="page_number++" v-if="page_number == 4" :contentdata="contentData" />
  <Page5 @nextpage="page_number = 1" v-if="page_number == 5" />

</template>
