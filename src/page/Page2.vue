<script setup lang="ts">
import Header from "../components/Headers/Fake_SNS.vue";
import snsContent from "../components/bodys/snsbody.vue";
import Go_viral from "../components/bodys/go_viral.vue";

// App.vueから渡されるデータをpropsで受け取る
defineProps({
  contentData: {
    type: Object as () => { 
      PostContents_Front: { Account_id: string; PostImage: string; PostContent: string }[], 
      Accounts: account[] 
    },
    required: true
  }
});

interface account {
  name: string,
  id: string,
  image: string,
  description: string
}
</script>

<template>
  <Header />
  <div v-if="contentData">
    <div v-for="(post, index) in contentData.PostContents_Front" :key="index">
      <snsContent :AccountID="post.Account_id" :PostImage="post.PostImage"
        :AccountName="contentData.Accounts.find(account => account.id === post.Account_id)?.name || ''">
        {{ post.PostContent }}
      </snsContent>
    </div>
  </div>
  <Go_viral @click="$emit('nextpage')"/>
</template>

<style scoped></style>
