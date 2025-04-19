<script setup lang="ts">
import { ref } from 'vue';
import Page1 from './page/Page1.vue';
import Page2 from './page/Page2.vue';
import Page3 from './page/Page3.vue';
import Page4 from './page/Page4.vue';
const page_number = ref(1)
</script>

<template>
  <Page1 @nextpage="page_number++" v-if="page_number == 1" />
  <Page2 @nextpage="page_number++" v-if="page_number == 2" />
  <Page3 @nextpage="page_number++" v-if="page_number == 3" />
  <Page4 @nextpage="page_number = 1" v-if="page_number == 4" />
</template>

<style scoped>

</style>
