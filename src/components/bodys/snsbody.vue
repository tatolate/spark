<script setup lang="ts">
import { ref, type PropType } from 'vue';
import WholeNoise from "../Noise/WholeNoise.vue";
import { GlitchedElement } from 'vue-powerglitch'


defineProps({
    AccountImage: {
        type: [String, Object] as PropType<string | HTMLImageElement>,
        required: true,
    },
    AccountName: {
        type: String,
        required: true,
    },
    AccountID: {
        type: String,
        required: true,
    },
    PostImage: {
        type: [String, Object] as PropType<string | HTMLImageElement>,
        required: true,
    },
    inside: {
        // 文字化け見せる用のオプション
        type: Boolean,
        required: true,
    },
    Comment:{
        type: Array as PropType<{ account_id: string; CommentContent: string }[]>,
        required: true,
    },
    timing: {
        type: Number,
        default: 2850
    }
})
const ContentFont = ref<string>("");
const randomFont = () => {
    const fonts = ['Dela Gothic One', 'DotGothic16', 'New Tegomin', 'Noto Serif JP', 'Rampart One', 'Reggae One', 'Zen Kurenaido'];
    ContentFont.value = fonts[Math.floor(Math.random() * fonts.length)];
};
setInterval(()=>{randomFont();}, 50);

let count = ref<number>(0)
setInterval(()=>{
    count.value = count.value + 1 

}, 5000);
</script>

<template>
    <div v-for="(index) in 7" :key="index">
        <WholeNoise v-if="inside" />
    </div>
    <div :class="{ inSide: inside }">
        <div class="snssentence">
            <div class="snsuser">
                <img :src="typeof AccountImage === 'string' ? AccountImage : AccountImage.src" class="usericon" :class="{ inSide: inside }">
                <h3 class="username" :class="{ inSide: inside }" :style="inside ? { fontFamily: ContentFont, fontStyle: 'normal' } : {}">{{ AccountName }}<span class="userid"> {{ AccountID
                        }}</span></h3>
            </div>
            <div class="userpost" :class="{ inSide: inside }">
                <img v-if="!inside" :src="typeof PostImage === 'string' ? PostImage : PostImage.src" class="postmedia">
                <GlitchedElement v-else :options="{ 'timing': { 'duration': timing } }">
                    <img :src="typeof PostImage === 'string' ? PostImage : PostImage.src" class="postmedia">
                </GlitchedElement>
                <p>
                    <slot></slot>
                </p>
            </div>
            <div class="triangle" v-if="!inside"></div>
            <div class="comment" v-if="!inside">
                
                
                    <div class="comlist">
                        <p class="everyone">みんなのコメント：</p>
                            <p  v-for="(Comments, index) in Comment"
                             class="com_list comid1"  
                            :style="{  opacity: count % Comment.length === index ?1 : 0 }"
                          >
                                @{{ Comments.account_id }} <br>
                                {{ Comments.CommentContent }}
                            </p>
                    </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=New+Tegomin&family=Noto+Serif+JP:wght@200..900&family=Rampart+One&family=Reggae+One&family=Zen+Kurenaido&display=swap');

.snssentence {
    position: relative;
    padding-top: 51px;
    margin: 0 auto;
    width: 399px;
}

.snsuser {
    position: absolute;
    z-index: auto;
    display: flex;
    margin-top: -40px;
}

.usericon {
    position: absolute;
    width: 50px;
    height: auto;
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
    width: 300px;    
}

.userid {
    color: grey;
}

.postmedia {
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

.comment {
    margin-top: 0px;
    margin-left: 50px;
    padding-bottom: 80px;
    margin-top: 10px;
    border: solid 1px;
    border-color: #5ce1e6;
    border-radius: 50px;
    width: 299px;
}

.triangle {
    width: 25px;
    margin-top: 10px;
    margin-bottom: -10px;
    margin-left: 90px;
    aspect-ratio: 1/cos(30deg);
    clip-path: polygon(50% 0,100% 100%,0 100%);
    background: #5ce1e6;
}
.comlist{
    margin-left: 20px;
    
}
.com_list{
    position: absolute;
    width: 270px;
}
.everyone{
    margin-left: 5px;
    margin-bottom: 0px;
}

.comid1{
    margin-left: 5px;
    transition: opacity 0.5s; 
}

/* ここから裏側投稿用 */
div.inSide {
    background-color: #790000;
}

h3.inSide {
    color: white;
}

.usericon.inSide {
    position: absolute;
    font-size: 10px;
    margin-left: 8px;
    border-radius: 100px;
    z-index: 10;
    border: solid 1px #df0404;
}

.username.inSide {
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

.username.inSide span {
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