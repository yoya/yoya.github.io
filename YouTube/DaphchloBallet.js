"use strict"

const timeSchedule = [
    /*
     * 第1場
     */
    "1:24",   // 冒頭
    "3:09",   // 
    "3:51.5", // 
    "4:24",   // ニンフの主題
    "6:36.5", //  ダフニスの主題
    "6:56.5", // クロエの主題
    "7:09",   //  宗教の踊り
    "8:30.5", // ダフニスの愛の主題
    "8:57",  //  ハミングで自然の主題。ニンフ
    "9:16.3", //   4/7(3/4+2/2)
    "9:35", //  クロエの嫉妬
    "9:40", //  ドルコン
    "10:12", // 全員のダンス
    "11:55", //
    "12:05", // ドルコンのちょっかい
    "729",  // クロエの主題でワルツ
    "744",
    "12:32", // 木管ファンファーレ
    // 踊り対決
    "12:51", // ドルコンのグロテクスな踊り
    "14:04", // ボンボーンのペザンテ
    "14:11", // 嘲笑
    "14:16", // ファンファーレ
    "14:41", // ダフニスの優雅な踊り
    "17:16", // オーボエによる、クロエの踊り
    "17:27.5", //  バスドラ、ファゴット、ヴィオラ
    "17:31.8", //  嘲笑、再び
    "17:38", // ppp ダフニスの愛の主題
    "18:03", // 序奏の音楽が短縮されて再現
    "18:20", // 舞台裏の合唱が「自然の主題」
    // リュセイオン
    "18:36", // クラリネットの二重奏。カデンツァ。リュセイオンを表現
    "19:04", // 「ダフニスの踊り」が回想
    "19:14", // !! リュセイオンの踊り
    "19:36", // 「ダフニスの踊り」が回想
    "19:41", // リュセイオンを表すクラリネット二重奏。フルートが踊りを続ける。
    "20:21", // 「ダフニスの踊り」が回想
    "20:27", // クラリネットの二重奏がリュセイオンを表現す
    "20:38", // コントラバスやバスクラリネットのうねり
    // 海賊 
    "21:06", // 「ダフニスの愛の主題」と「海賊の主題」が重なる。
    "21:16", // ややテンポが上がり、木管楽器が「クロエの主題」を奏でる
    "21:34.5", // 4本のトランペットが fff のユニゾンで「海賊の主題」
    "21:42", // 音楽は静まり、ppp となる。
    "22:04", // 突然、不協和音を伴う「ニンフたちの主題」が ff で出る
    /*
     * 第一組曲 ここから ↓↓↓
     */
    "22:30", // 夜想曲。弱音器を付けた弦楽器がppp でトリルを
    "22:46.5", // フルートが「ニンフたちの主題」をカデンツァ風に
    "23:10", // ホルンが「ニンフたちの主題」をカデンツァ風に
    "23:30.5", // クラリネットが「ニンフたちの主題」をカデンツァ風に
    "23:45", // エオリフォンがここではじめて登場する。
    "24:06", // 変イ長調、8分の6拍子
    "24:57", // エオリフォンの風の音や弦楽器。ニンフの主題
    "25:14", // クラリネットとヴィオラが「ダフニスの愛の主題」
    "25:40", // エオリフォンの風の音や弦楽器のトリルを背景に、ニンフの踊りの旋律
    "26:38", // 打楽器のロールや弦楽器のトリルが一瞬音量を膨らませ、すぐに消えていく。
    "27:04", // ダフニスはひれ伏し、パン神に祈る
    "27:28", // フェルマータのついた休符
    "27:31", // 《間奏曲》合唱のアカペラ。
    "29:21", // 遠くでラッパの信号。声が迫っている
    /*
     * 第2場
     */
    "30:06", 
    "30:20.5", // 戦いの踊り
    /*
     * 第一組曲 ここまで ↑↑↑
     */
    "34:27",
    "34:34", // ハープのグリッサンドを背景に、弦楽器が「クロエの主題」を奏でる
    "34:51", // 海賊の首領ブリュアクシスはクロエに踊りを命じる
    "35:14", // クロエの哀願の踊り
    "35:45", // クロエは隙を見て逃げようとする
    "36:21", // 海賊たちは力づくでクロエを戻す[
    "36:26", // 変イ長調に転調し、踊りが再開する。
    "37:25", // もう一度、クロエは逃げようとするが
    "37:28", // 彼女は再び戻される
    "37:31", // コーラングレの節が「ダフニスの愛の主題」につながる。"
    "37:50", // 変イ長調、海賊とクロエのやり取り。テンポどんどん速く。
    "38:41", // トランペット4本が ff で「海賊の主題」
    "38:47", // ハ長調、突然のpp。 コントラバスのトリル＞ホルン
    "39:00", // エオリフォンによる一陣の風。
    "39:18.5", // 管楽器に軽快な動機が登場し、次第に楽器の数が増えクレッシェンド
    "39:34", // 突然音楽が切り替わり、BD のロールなどがクレッシェンド
    /*
     * 第3場
     */
    "40:39", // 合唱が「嬰ヘ」音をホルンから引き継ぎ、
    // 第二組曲 ここから  ↓↓↓
    "41:02", // 《夜明け》
    "41:29", // ヴァイオリン、ピッコロ、フルートが鳥の鳴き声
    "42:10", // ヴィオラとクラリネットが、夜明け
    "42:32", // 舞台上のピッコロが羊飼いの笛
    "42:50", // 舞台上の小クラリネットが羊飼いの笛
    "43:15", // ヴァイオリンが夜明け, 舞台裏の合唱による「自然の主題
    "", // ダフニスとクロエを探す羊飼いたちが入場する。」
    "44:09", // 音価を縮小した「クロエの主題」がダフニスの不安を表現する。
    "44:17", // 木管楽器と弦楽器が上行し、1小節のうちに p から f へと急速にクレッシェンド
    "44:21", // f かつ感情が込められた「ダフニスの愛の主題」
    "44:49", // 息の長いクレッシェンド。頂点で「自然の主題」
    "45:53", // オーボエがラモンを表す新しい旋律。
    "46:25", // 《無言劇》
    "46:42", // 弦楽器が受ける。
    "46:59", // オーボエが下降する動機。「シリンクスの拒絶」
    "47:21", // クラリネットによる「シリンクスの拒絶」の動機
    "47:31", // 弦楽器が f でパン神の絶望 > 弦楽器のピチカートとハープ
    "47:53", // 伴奏に乗り長いフルートソロ > 第2フルートやピッコロ
    "50:07", // テンポをさらに速め、ff の頂点に昇り詰めて行く。
    "50:37.5", // イ長調の4オクターブに及ぶ下降音階 
    "51:06", // ロ長調に転調「ダフニスの愛の主題」
    "52:17", // 全曲冒頭と同じイ長調「ニンフたちの主題」「自然の主題」
    // 最後の 5/4
    "52:41.4", // 突然「4分音符＝168」。4分の5拍子バッカナール
    "52:49.5", // 一瞬テンポをゆるめ、アルトフルートとヴァイオリンが「ダフニスの愛の主題
    "52:55.5", // 再び急速なテンポの4分の5拍子
    "53:20", // 《全員の踊り》
    "54:10", //「クロエの主題」
    "54:26.5", // 「ドルコンのグロテスクな踊り」
    "54:50", // 3拍子のヘミオラ
    /*
     * 終端
     */
    "56:52",
];

const iframe = document.querySelector("iframe")
let { contentWindow } = iframe;
let timeIndex = null;
let startTimeSched = 0;
let startTimeReal = 0;
let playingIndex = -1;

const stringToTime = (s) => {
    let t = 0;
    for (const tt of s.split(/h|m|:/)) {
        t = t * 60 + parseFloat(tt);
    }
    return t;
}

function searchTimeIndex(time) {
    let offset = 0;
    for (let i = 0, n = timeSchedule.length; i < n ; i++) {
        const timeStr = timeSchedule[i];
        if (timeStr) {
            const t = stringToTime(timeStr);
            if (time < t) {
                return offset - 1;
            }
        }
        offset += 1;
    }
    return offset;
}

function getProportionInTimeSchedEntry(time) {
    const i = searchTimeIndex(time)
    let t1, t2;
    for (let j = i; j >= 0; j--) {
        if (timeSchedule[j]) {
            t1 = stringToTime(timeSchedule[j]);
            break;
        }
    }
    for (let j = i+1, n = timeSchedule.length; j < n; j++) {
        if (timeSchedule[j]) {
            t2 = stringToTime(timeSchedule[j]);
            break;
        }
    }
    return (time - t1) / (t2 - t1);
}

function searchTR(index) {
    const tableTable = document.querySelectorAll("table")
    let offset = 0;
    for (let i = 0, n = tableTable.length; i < n ; i++) {
        const table = tableTable[i];
        const trTable =  table.getElementsByTagName('tr');
        for (let ii = 0, nn = trTable.length; ii < nn ; ii++) {
            const tr = trTable[ii];
            const [td1, td2] = tr.getElementsByTagName('td');
            if (!td1) continue;  // th skip
            if (index <= offset) {
                return tr;
            }
            offset ++;
        }
    }
}

const INTERVAL_TIME = 200;
function tickHandler() {
    if (startTimeReal <= 0) {
        return ;
    }
    const now = performance.now();
    const diff = (now - startTimeReal);
    const time = startTimeSched + (diff / 1000);
    const index = searchTimeIndex(time);
    const tr = searchTR(index);
    if (tr) {
        const [td1, td2] = tr.getElementsByTagName('td');
        const proportion = getProportionInTimeSchedEntry(time);
        const grad = "linear-gradient(90deg, #eff "+(100*proportion)+"%, #ffd "+(101*proportion)+"%)";
        td2.style.background = grad;
    }
    if (playingIndex != index) {
        if (0 <= playingIndex) {
            const trPrev = searchTR(playingIndex);
            if (trPrev) {
                const [td1, td2] = trPrev.getElementsByTagName('td');
                td2.style.background = "";
            }
        }
        playingIndex = index;
    }
    // console.log({index, proportion});
}

setInterval(tickHandler, INTERVAL_TIME);


function downHandler(e) {
    const {target } = e;
    const time = Number(target.dataset.time);
    // console.log("downHandler", target, time);
    contentWindow.postMessage('{"event":"command","func":"seekTo","args":['+time+', true]}', '*');
    contentWindow.postMessage('{"event":"command","func":"playVideo"}', '*');
    startTimeSched = time;
    startTimeReal = performance.now();

}

const tableTable = document.querySelectorAll("table")
let offset = 0;
for (let i = 0, n = tableTable.length; i < n ; i++) {
    const table = tableTable[i];
    const trTable =  table.getElementsByTagName('tr');
    for (let ii = 0, nn = trTable.length; ii < nn ; ii++) {
        const tr = trTable[ii];
        const [td1, td2] = tr.getElementsByTagName('td');
        if (!td1) continue;  // th skip
        const timeStr = timeSchedule[offset];
        if (timeStr) {
            td1.classList.add("timeTd");
            td1.dataset.time = td2.dataset.time = stringToTime(timeStr);
            td1.addEventListener("pointerdown", downHandler, false);
        } else {
            td1.classList.add("notimeTd");
        }
        offset ++;
    }
}
