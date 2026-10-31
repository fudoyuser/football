// Ảnh cầu thủ lấy trực tiếp từ Wikipedia/Wikimedia Commons ngay trên trình duyệt.
// PageImages chỉ trả về ảnh có giấy phép tự do; mỗi ảnh hiển thị kèm tác giả + giấy phép.
// Nếu không tải được (offline, bị chặn...) thì giữ nguyên card silhouette SVG.
const WIKI_API = "https://en.wikipedia.org/w/api.php";
const photoCache = new Map();

function wikiQuery(params) {
  const qs = new URLSearchParams({ action: "query", format: "json", formatversion: "2", origin: "*", ...params });
  return fetch(`${WIKI_API}?${qs}`).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
}

const stripHtml = (html) => {
  const el = document.createElement("div");
  el.innerHTML = html || "";
  return el.textContent.trim();
};

async function fetchPhoto(title) {
  const imageProps = { prop: "pageimages", piprop: "thumbnail|name", pithumbsize: "480" };
  let data = await wikiQuery({ titles: title, redirects: "1", ...imageProps });
  let page = data.query && data.query.pages && data.query.pages[0];
  if (!page || page.missing || !page.thumbnail) {
    // Dự phòng: tìm bài viết gần đúng nhất
    data = await wikiQuery({ generator: "search", gsrsearch: `${title} footballer`, gsrlimit: "1", ...imageProps });
    page = data.query && data.query.pages && data.query.pages[0];
  }
  if (!page || !page.thumbnail || !page.pageimage) throw new Error("no image");

  const file = page.pageimage;
  let artist = "", license = "";
  try {
    const info = await wikiQuery({
      titles: `File:${file}`, prop: "imageinfo", iiprop: "extmetadata",
      iiextmetadatafilter: "Artist|LicenseShortName",
    });
    const meta = info.query.pages[0].imageinfo[0].extmetadata;
    artist = stripHtml(meta.Artist && meta.Artist.value);
    license = stripHtml(meta.LicenseShortName && meta.LicenseShortName.value);
  } catch (_) { /* thiếu metadata thì vẫn ghi nguồn Commons */ }

  // Tải trước ảnh để lúc hiển thị không bị giật
  await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = page.thumbnail.source;
  });

  return {
    src: page.thumbnail.source,
    fileUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, "_"))}`,
    artist,
    license,
  };
}

function loadPlayerPhoto(title) {
  if (!photoCache.has(title)) {
    const p = fetchPhoto(title).catch(() => null);
    photoCache.set(title, p);
  }
  return photoCache.get(title);
}

function playerPhotoCard(q, photo, revealed) {
  const pos = q.iconType.slice(7);
  const fig = document.createElement("figure");
  fig.className = "photo-card";
  fig.innerHTML = `
    <div class="photo-card__frame${pos === "gk" ? " photo-card__frame--gk" : ""}">
      <img alt="">
      <span class="photo-card__num">${revealed ? q.number : "?"}</span>
      <span class="photo-card__pos" title="${POSITION_BADGES[pos].label}">${positionBadge(pos)}</span>
    </div>
    <figcaption>Ảnh: <span class="photo-card__credit"></span><a target="_blank" rel="noopener">Wikimedia Commons</a></figcaption>`;
  const img = fig.querySelector("img");
  img.src = photo.src;
  img.alt = `Ảnh ${q.wiki.replace(/ \(.*\)$/, "")}`;
  fig.querySelector(".photo-card__credit").textContent =
    [photo.artist, photo.license].filter(Boolean).join(" · ") + (photo.artist || photo.license ? " · " : "");
  fig.querySelector("a").href = photo.fileUrl;
  return fig;
}
