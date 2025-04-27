<script setup lang="ts">
defineProps({
    AccountName: {
        type: String,
        required: true,
    },
    AccountID: {
        type: String,
        required: true,
    },
    PostImage: {
        type: String,
        required: true,
    },
    inside: {
        // 文字化け見せる用のオプション
        type:Boolean,
        required: true,
    },
})
</script>

<template>
<div :class="{inSide: inside}">
    <div class="snssentence">
        <div class="snsuser">
            <img src="https://placehold.jp/50x50.png" class="usericon" :class="{inSide: inside}">
            <h3 class="username" :class="{inSide: inside}">{{ AccountName }}<span class="userid"> {{ AccountID }}</span></h3>
        </div>
        <div class="userpost" :class="{inSide: inside}">
            <img :src="PostImage" class="postmedia">
            <p>
                <slot></slot>
            </p>
        </div>
    </div>
</div>
</template>


<style scoped>
.snssentence {
    position: relative;
    padding-top: 51px;
}

.snsuser {
    position: absolute;
    z-index: auto;
    display: flex;
    margin-top: -40px;
}

.usericon {
    position: absolute;
    font-size: 10px;
    margin-left: 8px;
    border-radius: 100px;
    z-index: 10;
    border: solid 1px #5ce1e6;
}

.username {
    font-size: 13px;
    margin-top: 6px;
    margin-left: 40px;
    border: solid #5ce1e6 2px;
    border-radius: 20px;
    z-index: 5;
    padding-left: 20px;
    padding-right: 30px;
}

.userid {
    color: grey;
}

.postmedia{
    width: 100%;
    height: auto;
}

.userpost {
    margin-left: 50px;
    width: 299px;
}

.userpost p {
    margin-top: 15px;
    border: solid #5ce1e6 1px;
    border-radius: 3px;
    margin-bottom: 0px;
}

/* ここから裏側投稿用 */
div.inSide{
    background-color: #790000;
}

.usericon.inSide{
    position: absolute;
    font-size: 10px;
    margin-left: 8px;
    border-radius: 100px;
    z-index: 10;
    border: solid 1px #df0404;
}

.username.inSide{
    font-size: 13px;
    margin-top: 6px;
    margin-left: 40px;
    border: solid #df0404 2px;
    border-radius: 20px;
    z-index: 5;
    padding-left: 25px;
    padding-right: 30px;
    background-color: black;
}

.username.inSide span{
    color: white;
}

.userpost.inSide p {
    margin-top: 15px;
    border: solid #df0404 1px;
    border-radius: 3px;
    color: white;
    background-color: black;
    margin-bottom: 0px;
}
</style>