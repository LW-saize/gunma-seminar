// 簡易データストア（MVPのため localStorage を使用）
// 本番実装ではサーバー側DBに置き換える想定。

const STORAGE_KEY = "boi-titles-mvp";

function loadTitles() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.warn("保存データの読み込みに失敗したため、初期データに戻します。", e);
    }
  }
  saveTitles(SEED_TITLES);
  return SEED_TITLES.slice();
}

function saveTitles(titles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(titles));
}

function getTitleById(id) {
  return loadTitles().find(t => t.id === id);
}

function upsertTitle(title) {
  const titles = loadTitles();
  const idx = titles.findIndex(t => t.id === title.id);
  if (idx >= 0) {
    titles[idx] = title;
  } else {
    titles.push(title);
  }
  saveTitles(titles);
}

function deleteTitle(id) {
  const titles = loadTitles().filter(t => t.id !== id);
  saveTitles(titles);
}

function resetToSeed() {
  saveTitles(SEED_TITLES);
}
