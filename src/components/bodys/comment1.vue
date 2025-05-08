<script setup lang="ts">
import { ref, onMounted } from "vue";


// コメントリスト
const comments = ref<{ account: string; message: string }[]>([
  { account: "ゆうや", message: "こんにちは！" },
  { account: "めい", message: "素晴らしい配信ですね！" },
  { account: "たかし", message: "もっと見たいです！" },
  { account: "mio", message: "ガチうけるｗ" },
]);

// 新しいコメントを追加する関数
const addComment = (newComment: { account: string; message: string }) => {
  comments.value.push(newComment);
  // 古いコメントを削除して流れ続けるようにする
  if (comments.value.length > 10) {
    comments.value.shift();
  }
};

// デモ用に定期的にコメントを追加
onMounted(() => {
  setInterval(() => {
    const randomAccounts = ["おだケイ", "mio","nene", "勇也", "めい", "かずキング", "あきら君だよ", "さくら", "風間隼人", "谷口山田", "ゆーき", "あや", "まさと", "りょう", "ゆうな", "涼我", "木村浩二", "ケンタ", "ゆう", "りんごちゃん", "こはく", "Sora", "あいり", "kuma_lover", "ぴえん", "なお", "さき", "まこ",
"たけちゃん", "yuki", "あやぴ", "nana", "haru", "しろねこ", "chi_chan", "なーちゃん", "miho", "kaito",
"ゆな", "けんた", "Hana", "れい", "らむね", "まいまい", "れもん", "こゆき", "Noa", "ひな",
"yuu_1122", "non", "あかり", "てんしちゃん", "しゅん", "みーちゃん", "ゆず", "tomo", "coco", "ちび",
"momo", "りお", "niko", "さとし", "aya", "koko", "sakura", "ren", "たまご", "ぽんちゃん",
"ゆり", "まる", "なっちゃん", "ちー", "minami", "haruka", "あおい", "しろくま", "neko_love", "うさまる",
"じゅん", "rina", "Sena", "まっちゃ", "るな", "まーくん", "かれん", "hikari", "もち", "yuna_",
"asuka", "たそ", "suzu", "えり", "kira", "つばさ", "うた", "みゆ", "じろう", "nana7",
"mikan", "hina_chan", "りりか", "そら", "Miku", "せな", "saki", "りく", "ちゃま", "さや",
"りの", "まひろ", "riko", "kanon", "るい", "nono", "natsu", "あやの", "まーしー", "いちご", "tkawasa", "ryotan", "ymd_m", "s_akiko", "knogu",
"hiro_t", "mizuki", "haruka", "junbiz", "t_kenta",
"naoto_", "chiaki", "s_yuji", "ayaka_", "r_taku",
"kenbiz", "aiko_c", "riko_s", "n_grow", "koji_w",
"yu_biz", "takumi", "emi_s", "kei_pm", "hikari",
"ak_dev", "kota_s", "nana_e", "erika_", "junpei",
"yuta_fx", "saya_m", "rika_d", "shota", "tatsuya",
"ayane_", "riku_s", "yumi_d", "suzuki", "a_dev",
"risa_m", "takao", "kana_h", "t_works", "hiro_m",
"ayaka", "kazuto", "aya_hr", "ai_grow", "nozomi", "堕天使", "魔王様", "虚無猫", "終焉神", "漆黒犬",
"黒焔", "†闇†", "冥界人", "咎人X", "暗黒龍",
"夜神", "焔", "堕星", "零", "†罪†",
"紅蓮", "月影", "夢幻", "滅神", "幻影",
"†焔†", "壊神", "冥王", "深淵", "断罪",
"闇猫", "黒翼", "夜叉", "神罰", "夢花",
"虚空", "月詠", "滅牙", "闇狐", "漆黒",
"夜鴉", "†夜†", "魔眼", "無影", "死神",
"終息", "十六夜", "破壊", "白夜", "哀哭",
"孤影", "煌", "†紅†", "奈落", "災厄"];
    const randomComments = [
"一コメ！","面白い！","いいね！","すごく楽しい！","最高の配信！","応援しています！","素晴らしいですね！","もっと頑張ってください！","すごい！","最高です！","応援しています！","楽しいですね！","素敵な配信！","面白い配信！","もっと見たい！","楽しい！","最高！","ガチうけるｗ","神配信！","爆笑ｗｗ","やばｗ","ガチで好きっす","友達募集中","すげーー","こんにちは", "やっほー", "きたよ！", "待ってた！", "今日も可愛い",
"おつかれさま", "声いいね", "元気？", "楽しみにしてた！", "映像きれい",
"コメント読んで！", "応援してる", "また来た！", "初見です！", "ナイス！",
"最高！", "いい感じ", "それ好き！", "うまい！", "拍手👏",
"草", "笑ったw", "神回", "感動した", "すごー！",
"天才！", "眠くない？", "今日何してた？", "かわいすぎ", "面白い！",
"頑張って！", "大好き", "ファンです", "ハート送った", "え、神",
"もっと見せて！", "その曲好き", "歌って！", "踊って！", "質問いい？",
"どこ住み？", "年齢は？", "ご飯食べた？", "おすすめある？", "また来るね",
"ギフト送ったよ", "通知オンにした", "保存した", "スクショした", "声タイプ",
"手振ってー", "ポーズして！", "その服どこの？", "髪型かわいい", "メイクいいね",
"今日イケてる", "癒される", "いい声〜", "もっと話して", "何時まで？",
"誕生日いつ？", "誕生日おめでとう", "顔ちっちゃ！", "その背景おしゃれ", "ペットいる？",
"カラオケいける！", "配信嬉しい", "リクエストしていい？", "おすすめ曲ある？", "通知きたから来た",
"ほんと好き", "いい人すぎ", "なんでも似合う", "寝れないから来た", "尊い",
"ちょっと泣いた", "かわいすぎて無理", "ずっと見てたい", "その声反則", "癖になる",
"友達にも勧めた", "次も絶対くる", "マジ神対応", "癒し枠", "優勝",
"通知バグってた", "チャリで来た", "他の配信より好き", "もう一回やって", "コメント読まれて嬉しい",
"もっと喋って", "テンション好き", "やっぱ推せる", "いい夢見れそう", "バイバイまたね"
    ];
    const randomAccountIndex = Math.floor(Math.random() * randomAccounts.length);
    const randomCommentIndex = Math.floor(Math.random() * randomComments.length);
    addComment({
      account: randomAccounts[randomAccountIndex],
      message: randomComments[randomCommentIndex],
    });
  }, 1000); // 1秒ごとにコメントを追加
});
</script>

<template>
    <div class="comment-section">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="comment"
      >
        <strong>{{ comment.account }}</strong>：{{ comment.message }}
      </div>
    </div>
  </template>

<style scoped>
.comment-section {
  position: relative;
  bottom: 10px;
  left: 10px;
  width: 300px;
  height: 120px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
  color: rgb(0, 0, 0);
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

.comment {
  animation: slide-up 1s linear;
  margin-bottom: 3px;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>