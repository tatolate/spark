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
  <Header :inside="inside"/>
  <div v-if="contentdata">
    <div v-for="(post, index) in inside ? contentdata.PostContents_Back : contentdata.PostContents_Front" :key="index">
      <snsContent :AccountID="post.Account_id" :PostImage="post.PostImage"
      :AccountName="contentdata.Accounts.find(account => account.id === post.Account_id)?.name || ''" :inside="inside"
      :timing="Math.floor(Math.random()* 1000+2000)">
      {{ post.PostContent }}
      </snsContent>
    </div>
  </div>
  <Go_viral :inside="inside" @click="$emit('nextpage')"/>
</template>

<style scoped></style>
