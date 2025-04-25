<script setup lang="ts">
import { ref, onMounted } from "vue";
import Header from "../components/Headers/Fake_SNS.vue"
import snsContent from "../components/bodys/snsbody.vue";
import axios from "axios";
import Go_viral from "../components/bodys/go_viral.vue";
defineProps({
  double: {
    type: Boolean,
    default: false,
  }
});

const ContentData = ref<ContentDataType | null>(null);

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
  <div v-if="ContentData" >
    <div v-for="(post, index) in ContentData.PostContents_Front" :key="index">
      <snsContent :AccountID="post.Account_id" :PostImage="post.PostImage" :AccountName="ContentData.Accounts.find(account => account.id === post.Account_id)?.name || ''">{{post.PostContent}}</snsContent>
    </div>
  </div>
  <Go_viral/>
</template>

<style scoped>



</style>
