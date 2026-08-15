// タイトル詳細ページの描画ロジック

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const title = id ? getTitleById(id) : null;

const container = document.getElementById("detail");

if (!title) {
  container.innerHTML = `<p>タイトルが見つかりませんでした。<a href="index.html">一覧に戻る</a></p>`;
} else {
  const color = GENRE_COLORS[title.genre] || "#999";
  const icon = GENRE_ICONS[title.genre] || "🎮";
  container.innerHTML = `
    <a class="back-link" href="index.html">← 一覧に戻る</a>
    <div class="detail-thumb" style="background:${color}"><span class="thumb-icon">${icon}</span></div>
    <span class="genre-tag" style="background:${color}">${title.genre}</span>
    <h1>${title.name}</h1>
    <p class="release-date">配信日: ${formatDate(title.releaseDate)}</p>
    <p class="description">${title.description}</p>
    <div class="store-links">
      <a class="store-btn" href="${title.storeLinks.ios}">App Store で見る</a>
      <a class="store-btn" href="${title.storeLinks.android}">Google Play で見る</a>
    </div>
  `;
}
