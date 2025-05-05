<script setup lang="ts">
defineProps({
  inside: { 
    type:Boolean,
    required: true,
   },
})
</script>

<template>
    <div class="gradient" :class="{inSide: inside}">
        <h1>あなたもバズる？</h1>
    </div>
</template>
<style scoped>
.gradient{
    position: relative;
    text-align: center;
    background: linear-gradient(white, black 70%); 
    padding-bottom: 1000px;
}

.gradient h1{
    position: absolute;
    color: #d10a14;
    top: 550px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}

/* ここから裏側投稿用 */
.gradient.inSide{
    position: relative;
    text-align: center;
    background: linear-gradient(#790000, black 70%); 
    padding-bottom: 1000px;
}

.gradient.inSide h1{
    position: absolute;
    color: #C0C0C0;
    top: 550px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</style>
