<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "../components/Headers/Fake_SNS.vue"
import snsbody from "../components/bodys/snsbody.vue";
import axios from "axios";

const ContentData = ref<ContentDataType | null>(null);

// onMounted でデータ取得
onMounted(() => {
  axios.get('/Content.json')
    .then(response => {
      console.log('API取得成功:', response.data);
      ContentData.value = response.data;
    })
    .catch(error => {
      console.error('API取得エラー:', error);
    });
});
</script>

<template>
  <Header/>
  <snsbody/>
  <div v-if="ContentData" >
    <div v-for="(post, index) in ContentData.PostContents_Front" :key="index"">
      <p>{{ post.PostContent }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>
