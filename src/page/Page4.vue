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
  }
});

</script>

<template>
  <Header :inside="true"/>
  <div v-if="contentdata">
    <div v-for="(post, index) in contentdata.PostContents_Front" :key="index">
      <snsContent :AccountID="post.Account_id" :PostImage="post.PostImage"
        :AccountName="contentdata.Accounts.find(account => account.id === post.Account_id)?.name || ''" :inside="false">
        {{ post.PostContent }}
      </snsContent>
    </div>
  </div>
  <Go_viral :inside="true" @click="$emit('nextpage')"/>
</template>

<style scoped></style>
