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
})
</script>

<template>
        <!-- 一人旅のススメ -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;{{ AccountName }}<span class="userid"> {{ AccountID }} &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img :src="PostImage" class="postmedia">
                <p><slot></slot></p>
            </div>
        </div>
</template>



<style scoped>
.snssentence{
    position: relative;
    padding-top: 51px;
}

.snsuser{
    position: absolute;
    z-index: auto;
    display: flex;
    margin-top: -40px;
}

.usericon{
    position: absolute;
    font-size: 10px;
    margin-left: 8px;
    border-radius: 100px;
    z-index: 10;
}

.username{
    font-size: 13px;
    margin-top: 6px;
    margin-left: 40px;
    border: solid aqua 2px;
    border-radius: 20px;
    z-index: 5;
}

.userid{
    color: grey;
}

.userpost{
    margin-left: 50px;
    width: 299px;
    
}

.userpost p{
    margin-top: 15px;
    border: solid aqua 1px;
    border-radius: 3px;
    
    
}



</style>