<script setup lang="ts">
import { ref, onMounted } from "vue";


// コメントリスト
const comments = ref<{ account: string; message: string }[]>([
  { account: "ゆうや", message: "おもんな" },
  { account: "めい", message: "クソ配信やん" },
  { account: "たかし", message: "見る価値ないって" },
  { account: "mio", message: "見てられない" },
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
"またかよ", "調子乗りすぎ", "うるさい", "必死すぎ", "誰得？",
"ネタ切れ？", "寒い", "内輪ノリきつい", "似たようなのばっか", "もう飽きた",
"で？", "何がしたいの", "わざとらしい", "嘘くさい", "ガチで無理",
"加工しすぎ", "盛ってるよね", "リアルは違う", "裏で性格悪そう", "虚像って感じ",
"ちやほやされたいだけ", "フォロワー稼ぎか", "必死すぎて笑う", "痛い", "構ってちゃん",
"あざとい", "裏垢では毒吐いてそう", "調子乗るなよ", "だれ？", "アンチ増えそう",
"中身ないよね", "なにが人気なの", "見る価値ある？", "そろそろ引退では", "数字だけ",
"量産型すぎ", "キャラ作りすぎ", "キャラ迷子", "演じてる感", "媚びててキツい",
"本音言えよ", "信者怖", "囲いウザい", "信者しか見てない", "どうせヤラセ",
"設定盛りすぎ", "イタすぎ", "真顔で見てる", "冷めた", "こっちが恥ずかしい",
"バレバレだよ", "見ててつらい", "わざと炎上狙ってる？", "不快", "見るだけ時間の無駄",
"マウントすごい", "ついてけない", "冷めた目で見てる", "どこが面白いの", "なぜ人気？",
"演技下手", "無理してる感", "見ててヒヤヒヤする", "昔のが良かった", "もう限界でしょ",
"アンチ増えるの分かる", "お金目的？", "毎日やらないと不安？", "病んでそう", "痛々しい",
"炎上狙い？", "伸び悩んでるね", "トーク下手", "頭悪そう", "勘違いしてる",
"ファンに媚びてる", "かわいそうって言われたい？", "全部ネタでしょ", "そろそろ終わるな", "内容スカスカ",
"同情買いたいだけ", "他人の真似", "思ったよりしょぼい", "最近落ち目", "悲壮感ある",
"必死にしがみついてる", "無理に明るくしないで", "テンプレ過ぎ", "誰にも刺さらない", "内面見えない",
"もういいよ", "時間返して", "限界来てるよ", "飽きられてる", "崩壊しそう",
"雰囲気でごまかしてる", "全部計算でしょ", "言い訳多くない？", "あれでプロ？", "表と裏違いすぎ"
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
  bottom: 130px;
  left: 10px;
  width: 300px;
  max-height: 120px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgb(201, 0, 0);
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