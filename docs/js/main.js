// トップページ（一覧・フィルタ）の描画ロジック

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

// 演習時点（2026-08-15）を基準に、7日以内リリースを NEW 扱いにする
function isNew(dateStr) {
  const today = new Date("2026-08-15T00:00:00");
  const target = new Date(dateStr + "T00:00:00");
  const diffDays = (target - today) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= 7;
}

let activeGenre = "すべて";

function render() {
  const titles = loadTitles()
    .filter(t => activeGenre === "すべて" || t.genre === activeGenre)
    .sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));

  const list = document.getElementById("title-list");
  list.innerHTML = "";

  if (titles.length === 0) {
    list.innerHTML = `<p class="empty">該当するタイトルがありません。</p>`;
    return;
  }

  titles.forEach(t => {
    const color = GENRE_COLORS[t.genre] || "#999";
    const card = document.createElement("a");
    card.className = "card";
    card.href = `detail.html?id=${encodeURIComponent(t.id)}`;
    card.innerHTML = `
      <div class="card-thumb" style="background:${color}">
        ${isNew(t.releaseDate) ? '<span class="badge-new">NEW</span>' : ""}
      </div>
      <div class="card-body">
        <span class="genre-tag" style="background:${color}">${t.genre}</span>
        <h3>${t.name}</h3>
        <p class="release-date">配信日: ${formatDate(t.releaseDate)}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderFilters() {
  const filterBar = document.getElementById("genre-filter");
  const genres = ["すべて", ...GENRES];
  filterBar.innerHTML = "";
  genres.forEach(g => {
    const btn = document.createElement("button");
    btn.textContent = g;
    btn.className = "filter-btn" + (g === activeGenre ? " active" : "");
    btn.addEventListener("click", () => {
      activeGenre = g;
      renderFilters();
      render();
    });
    filterBar.appendChild(btn);
  });
}

renderFilters();
render();
