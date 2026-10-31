// Hiển thị ảnh cầu thủ. Dữ liệu ảnh (PLAYER_PHOTOS) nằm trong squad.js của từng đội;
// ảnh lưu ở <đội>/images/players/, mỗi ảnh hiển thị kèm tác giả + giấy phép (xem CREDITS.md của đội).

// Câu có ảnh khi đã có thông tin nguồn ảnh; chưa có thì dùng card silhouette
const hasPhoto = (q) => Boolean(q.photo && PLAYER_PHOTOS[q.photo]);

const photoSrc = (slug) => `images/players/${slug}.jpg`;

// Tải trước ảnh để lúc chuyển câu không bị giật
function preloadPlayerPhoto(slug) {
  new Image().src = photoSrc(slug);
}

// Card ảnh cầu thủ; nếu ảnh lỗi thì quay về card silhouette SVG
function playerPhotoCard(q, revealed, onError) {
  const pos = q.iconType.slice(7);
  const credit = PLAYER_PHOTOS[q.photo];
  const fig = document.createElement("figure");
  fig.className = "photo-card";
  fig.innerHTML = `
    <div class="photo-card__frame${pos === "gk" ? " photo-card__frame--gk" : ""}">
      <img alt="" width="400" height="500">
      <span class="photo-card__num">${revealed ? q.number : "?"}</span>
      <span class="photo-card__pos" title="${POSITION_BADGES[pos].label}">${positionBadge(pos)}</span>
    </div>
    <figcaption>Ảnh: <span class="photo-card__credit"></span> · <a class="photo-card__license" target="_blank" rel="noopener"></a> · <a class="photo-card__source" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption>`;
  const img = fig.querySelector("img");
  img.addEventListener("error", onError, { once: true });
  img.src = photoSrc(q.photo);
  fig.querySelector(".photo-card__credit").textContent = credit.artist;
  const lic = fig.querySelector(".photo-card__license");
  lic.textContent = credit.license;
  lic.href = credit.licenseUrl;
  fig.querySelector(".photo-card__source").href = credit.source;
  return fig;
}
