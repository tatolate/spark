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

const preloadImages = (resultData: ContentDataType): Promise<ContentDataType> => {
  const imagePromises: Promise<void>[] = [];

  const preload = (src: string): HTMLImageElement => {
    const img = new Image();
    img.src = src;

    const promise = new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });

    imagePromises.push(promise);
    return img;
  };

  resultData.Accounts.forEach(account => {
    if (account.image && typeof account.image === 'string') {
      account.image = preload(account.image);
    }
  });

  resultData.PostContents_Front.forEach(post => {
    if (post.PostImage && typeof post.PostImage === 'string') {
      post.PostImage = preload(post.PostImage);
    }
  });

  resultData.PostContents_Back.forEach(post => {
    if (post.PostImage && typeof post.PostImage === 'string') {
      post.PostImage = preload(post.PostImage);
    }
  });

  return Promise.all(imagePromises).then(() => resultData);
};

onMounted(async () => {
  try {
    const response = await axios.get('/Content.json');
    const contentDat = await preloadImages(response.data);
    imagesLoaded.value = true;
    contentData.value = contentDat;
  } catch (error) {
    console.error('API取得エラー:', error);
  }
});
</script>

<template>
  <Page1 @nextpage="page_number = 2" v-if="page_number == 1" :imagesLoaded="imagesLoaded" />
  <Page2 @nextpage="page_number++" v-if="page_number == 2" :contentdata="contentData" />
  <Page3 @nextpage="page_number++" v-if="page_number == 3" />
  <Page4 @nextpage="page_number++" v-if="page_number == 4" :contentdata="contentData" />
  <Page5 @nextpage="page_number = 1" v-if="page_number == 5" />

</template>
