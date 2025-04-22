<template>
    <body>
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username">さすらいの登山家<span class="userid"> @climbimg_13674</span>       </h3>
            </div>
            <div>
                <img src="https://placehold.jp/299x98.png" class="postmedia">
            </div>
        </div>

    </body>

</template>

<script>
export default {};
</script>

<style scoped>
.snssentence{
    position: relative;
}

.usericon{
    font-size: 10px;
    margin-left: 8px;
    border-radius: 100px;
}

.snsuser{
    z-index: auto;
    display: flex;
    margin-top: 46px;
}

.username{
    position: absolute;
    font-size: 13px;
    margin-top: 7px;
    margin-left: 20px;
    border: solid aqua 2px;
    border-radius: 20px;
}

.userid{
    color: grey;
}

.postmedia{
    position: absolute;
    margin-left: 60px;
    width: 299px;
    height: 92px;
}
</style>