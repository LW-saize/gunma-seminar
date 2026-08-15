// 管理画面（登録・編集・削除）のロジック

function renderTable() {
  const titles = loadTitles().sort((a, b) => a.releaseDate.localeCompare(b.releaseDate));
  const tbody = document.getElementById("title-table-body");
  tbody.innerHTML = "";

  titles.forEach(t => {
    const color = GENRE_COLORS[t.genre] || "#999";
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${t.name}</td>
      <td><span class="genre-tag" style="background:${color}">${t.genre}</span></td>
      <td>${t.releaseDate}</td>
      <td>
        <button class="edit-btn" data-id="${t.id}">編集</button>
        <button class="delete-btn" data-id="${t.id}">削除</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", () => loadIntoForm(btn.dataset.id));
  });
  tbody.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("このタイトルを削除しますか？")) {
        deleteTitle(btn.dataset.id);
        renderTable();
      }
    });
  });
}

function populateGenreSelect() {
  const select = document.getElementById("f-genre");
  select.innerHTML = GENRES.map(g => `<option value="${g}">${g}</option>`).join("");
}

function loadIntoForm(id) {
  const t = getTitleById(id);
  if (!t) return;
  document.getElementById("f-id").value = t.id;
  document.getElementById("f-name").value = t.name;
  document.getElementById("f-genre").value = t.genre;
  document.getElementById("f-date").value = t.releaseDate;
  document.getElementById("f-desc").value = t.description;
  document.getElementById("f-ios").value = t.storeLinks.ios;
  document.getElementById("f-android").value = t.storeLinks.android;
  document.getElementById("form-title").textContent = "タイトルを編集";
}

function resetForm() {
  document.getElementById("title-form").reset();
  document.getElementById("f-id").value = "";
  document.getElementById("form-title").textContent = "新しいタイトルを登録";
}

document.getElementById("title-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.getElementById("f-id").value || "t" + Date.now();
  const title = {
    id,
    name: document.getElementById("f-name").value.trim(),
    genre: document.getElementById("f-genre").value,
    releaseDate: document.getElementById("f-date").value,
    description: document.getElementById("f-desc").value.trim(),
    storeLinks: {
      ios: document.getElementById("f-ios").value.trim() || "#",
      android: document.getElementById("f-android").value.trim() || "#"
    }
  };
  if (!title.name || !title.releaseDate) {
    alert("タイトル名と配信日は必須です。");
    return;
  }
  upsertTitle(title);
  resetForm();
  renderTable();
});

document.getElementById("cancel-edit").addEventListener("click", resetForm);

document.getElementById("reset-seed").addEventListener("click", () => {
  if (confirm("登録内容をすべて初期データにリセットします。よろしいですか？")) {
    resetToSeed();
    resetForm();
    renderTable();
  }
});

populateGenreSelect();
renderTable();
