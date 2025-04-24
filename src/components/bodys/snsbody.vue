<script setup lang="ts">
import { ref } from 'vue';

// export default {};
const inside = ref(false)
</script>

<template>
        <!-- 一人旅のススメ -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#一人旅のススメ 誰にも縛られない僕、旅先で本当の自分に出会えた</p>
                <p v-if="inside==true">誰とも話さなかった3日間。SNSにアップする写真だけが、僕がそこにいた証拠。</p>
            </div>
        </div>
        <!-- 親友とシェアハウス -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#親友とシェアハウス やっぱり友達ってサイコー！毎日が文化祭みたい！</p>
                <p v-if="inside==true">会話はSNSに載せる時だけ。食器も片付けない。今は、部屋に鍵かけた。</p>
            </div>
        </div>
        <!-- きれいな暮らし -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#きれいな暮らし</p>
                <p v-if="inside==true">綺麗なのは、使ってないからなのにね。</p>
            </div>
        </div>
        <!-- ネット断罪 -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#ネット断罪 見て！倒れてる女性の前に不審者！晒すからみんな通報！不審者許すな！</p>
                <p v-if="inside==true">《ネットニュース》公園で女性が意識不明の重体。駆けつけた一般人が処置を行おうとするも、同じく駆けつけた数名によって処置の妨害を受け、処置が遅れたものとみられています。警察は原因を調べており…</p>
            </div>
        </div>
        <!-- STAN -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#STAN 推し活やめられない。～～～様最高！～～～様やめられない！！！</p>
                <p v-if="inside==true">最近誰かにつけられてる気がして怖い。家にも手紙とか、贈り物とかが不定期に知らない人から届く。家の中でも視線を感じるときあるし、不安で眠れない。仕事辞めたい、助けて。</p>
            </div>
        </div>
        <!-- 今日も盛れてる -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p v-if="inside==false">#今日も盛れてる 自分史上最高に盛れた！今日もポジティブでいくよ♡ #毎日更新チャレンジ #感謝</p>
                <p v-if="inside==true">一年前の画像と、ポジティブっていう言葉。ほんとは学校いけてないのに。私じゃない私を、みんなどんどん好きになっていくんだ。もう戻れない。みんなが認めてくれるのは、私じゃないもん。</p>
            </div>
        </div>
        <!-- 頑張った日記 -->
        <div class="snssentence">
            <div class="snsuser">
                <img src="https://placehold.jp/50x50.png" class="usericon" >
                <h3 class="username"> &emsp;&emsp;さすらいの登山家<span class="userid"> @climbimg_13674 &emsp;</span></h3>
            </div>
            <div class="userpost">
                <img src="https://placehold.jp/299x98.png" class="postmedia">
                <p class="usermain" v-if="inside==false">#頑張った日記 闘病大変だけど、共感のコメントがいっぱいで嬉しいです。ありがとう！ #頑張った日記</p>
                <p v-if="inside==true">どいつもこいつも、わかるわかるって。何が分かるんだろう。みんな知らない、一人の孤独も、ずっと見ていなきゃいけない天井も、コピーみたいな共感の嵐も。</p>
            </div>
        </div>
        <div class="gradient">

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

.gradient{
    background: linear-gradient(white, black); 
    padding-bottom: 500px;
}

</style>