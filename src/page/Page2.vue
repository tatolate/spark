<script setup lang="ts">
import Header from "../components/Headers/Fake_SNS.vue";
import snsContent from "../components/bodys/snsbody.vue";
import Go_viral from "../components/bodys/go_viral.vue";
import type { PropType } from 'vue';
// App.vueから渡されるデータをpropsで受け取る
defineProps({
  contentdata: {
    type: Object as PropType<ContentDataType>,
    required: true
  },
  inside:{
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="all-frame">
  <Header id="header" :inside="inside"/>
  <div v-if="contentdata">
    <div v-for="(post, index) in inside ? contentdata.PostContents_Back : contentdata.PostContents_Front" :key="index">
      <snsContent :AccountImage="post.AccountImage" :AccountID="post.Account_id" :PostImage="post.PostImage"
      :AccountName="post.Account_name" :inside="inside"
      :Comment="post.Comments"
      :timing="Math.floor(Math.random()* 1000+3000)">
      <span v-html="post.PostContent"></span>
      </snsContent>
    </div>
  </div>
  <Go_viral :inside="inside" @click="$emit('nextpage')">
    <a href="#header" class="back_top"/>
  </Go_viral>
  </div>
</template>

<style scoped>
.all-frame{
  overflow-x: hidden;
}

.back_top{
  scroll-behavior: auto;
}
</style>
