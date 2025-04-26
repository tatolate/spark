<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Page1 from './page/Page1.vue';
import Page2 from './page/Page2.vue';
import Page3 from './page/Page3.vue';
import Page4 from './page/Page4.vue';
<<<<                  <<< HEAD
import PageLive from './page/PageLive.vue';
const page_number = ref(100)
document.cookie="experience=true; path=/";
=======

const page_number = ref(1);
const contentData = ref<ContentDataType>({
  Accounts: [],
  PostContents_Front: []
});

document.cookie = "experience=true; path=/";

onMounted(() => {
  // JSONデータを取得
  axios.get('/Content.json')
    .then(response => {
      console.log('API取得成功:', response.data);
      contentData.value = response.data;
    })
    .catch(error => {
      console.error('API取得エラー:', error);
    });
});
>>>>>>> 5d393935a5ec426e672bcb2377cdd17098bcd182
</script>

<template>
  <Page1 @nextpage="page_number=2" v-if="page_number == 1" />
  <Page2 
    @nextpage="page_number++" 
    v-if="page_number == 2" 
    :content-data="contentData" 
  />
  <Page3 @nextpage="page_number++" v-if="page_number == 3" />
  <Page4 @nextpage="page_number = 1" v-if="page_number == 4" />
  <PageLive @nextpage="page_number = 1" v-if="page_number == 100" />
  
</template>

<style scoped>

</style>
