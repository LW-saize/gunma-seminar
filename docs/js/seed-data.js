// ジャンル一覧
const GENRES = ["RPG", "パズル", "シミュレーション", "脱出ゲーム", "カード", "アクション"];

// ジャンルごとの表示カラー（デザイン定義書のトンマナに準拠）
const GENRE_COLORS = {
  "RPG": "#2D6CDF",
  "パズル": "#FF8A3D",
  "シミュレーション": "#2FAE66",
  "脱出ゲーム": "#8A4FDB",
  "カード": "#DB4F8A",
  "アクション": "#DBA62D"
};

// 初期表示用のサンプルデータ（本番では管理画面からの登録データに置き換わる）
const SEED_TITLES = [
  {
    id: "t1",
    name: "星降る王国のロンド",
    genre: "RPG",
    releaseDate: "2026-08-20",
    description: "剣と魔法の王国を舞台にした、じっくり物語を楽しめる新作RPG。",
    storeLinks: { ios: "#", android: "#" }
  },
  {
    id: "t2",
    name: "まちがいさがし探偵団",
    genre: "パズル",
    releaseDate: "2026-08-18",
    description: "毎日更新される謎解きに挑戦するライトパズルゲーム。",
    storeLinks: { ios: "#", android: "#" }
  },
  {
    id: "t3",
    name: "たてもの経営タウン",
    genre: "シミュレーション",
    releaseDate: "2026-08-25",
    description: "小さな街をゼロから育てる箱庭シミュレーション。",
    storeLinks: { ios: "#", android: "#" }
  },
  {
    id: "t4",
    name: "封鎖病棟からの脱出",
    genre: "脱出ゲーム",
    releaseDate: "2026-09-01",
    description: "謎の病棟からの脱出を目指す、じっくり系脱出ゲーム。",
    storeLinks: { ios: "#", android: "#" }
  },
  {
    id: "t5",
    name: "デッキマスターズ・オンライン",
    genre: "カード",
    releaseDate: "2026-08-22",
    description: "対戦相手とリアルタイムで駆け引きするカードバトル。",
    storeLinks: { ios: "#", android: "#" }
  },
  {
    id: "t6",
    name: "疾走レジェンズ",
    genre: "アクション",
    releaseDate: "2026-08-16",
    description: "スピード感あふれるタップアクションゲーム。",
    storeLinks: { ios: "#", android: "#" }
  }
];
