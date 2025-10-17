document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("imageSelect");
  const button = document.querySelector(".go-out");
  const image = document.querySelector(".image");
  const tsukapi = document.querySelector(".tsukapi");
  const happy = document.querySelector(".happybirthday");
  const fixedMessageElement = document.querySelector(".fixedMessage");
  const sender = document.querySelector(".sender");

  const names = ["ツカピン", "トカピン", "チュカピン", "セカピン"];
  const messages = ["誕生日おめでとう", "Happy Birthday", "ハピバ", "ハッピーバースデー", "テューダー朝"];

  const fixedMessages = {
    "001": "俺のこと忘れてないよね・・・？",
    "002": "大谷翔平が二刀流？いや俺でしょ。でもチュカピンもスマブラとウクレレの二刀流",
    "003": "ポテチ、カップラーメン、ペヤング、カマヴィンガ",
    "004": "屁汁を吸うから僕はへジス",
    "005": "こう見えて同い年だから仲良くしてな",
    "006": "今年のベストゴールは実際俺。",
    "007": "トカピンの奥さんはノンブッフォン。ハリーケインの嫁はブッフォン",
    "008": "割と絡み薄いからノーコメントでお願いしたい。",
    "009": "J.Suzukiのユニフォーム着てワールドカップで活躍するの熱すぎ",
    "010": "この中で一番世界的にすごいのたぶんトランプか俺",
    "011": "イイツカ家に僕たちイイヅカサッカー部は勝利を届けます",
    "012": "ドラマ「良いこと悪いこと」は僕を題材にしたドラマです",
    "013": "今度訪日したら大富豪パンティーの開催よろしく",
    "014": "岡田メソッドはまず守ること。つまり岡田衛",
    "015": "いや俺ウクレレのメンバーにいてもよくない？",
    "016": "1試合だけウクレレ出してもらって、大量失点したあの夜を忘れない",
    "017": "ファジアーノ岡山所属なのに取り上げてもらってありがとう",
    "018": "東戸塚",
    "019": "来年一緒に世界一の景色を見よう",
    "020": "ルヴァン決勝応援してくれてありがとう",
    "021": "これからもよろしく頼むで"
  };

  button.addEventListener("click", () => {
  const value = select.value;

  // 選択中の option のテキストを取得
  const selectedOption = select.options[select.selectedIndex].text;

  // ① 画像切り替え
  image.src = `image/${value}.png`;

  // ② tsukapiランダム
  const randomName = names[Math.floor(Math.random() * names.length)];
  tsukapi.textContent = randomName;

  // ③ happybirthdayランダム
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  happy.textContent = randomMessage;

  // ④ fixedMessage表示
  fixedMessageElement.textContent = fixedMessages[value] || "";

  // ⑤ sender表示
  sender.innerHTML = `<span class="sender-name">${selectedOption}</span>からのお祝い`;
});

});


