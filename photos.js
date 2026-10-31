// Ảnh cầu thủ lưu trong images/players/, cắt từ ảnh giấy phép tự do trên Wikimedia Commons.
// Mỗi ảnh hiển thị kèm tác giả + giấy phép; danh sách đầy đủ ở CREDITS.md.
const PLAYER_PHOTOS = {
  "alisson": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Alisson_Becker_04012026_(1).jpg"},
  "van-dijk": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Virgil_van_Dijk_06042025_(2).jpg"},
  "wirtz": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Florian_Wirtz_04012026_(3)_(extracted).jpg"},
  "mac-allister": {"artist": "Bryan Berlin", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Alexis_Mac_Allister_Argentina_v_Spain_19_July_2026-162.jpg"},
  "szoboszlai": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Dominik_Szoboszlai_04012026_(1).jpg"},
  "isak": {"artist": "Bryan Berlin", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Alexander_Isak_France_v_Sweden_6.30.26-043.jpg"},
  "ekitike": {"artist": "Liondartois", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Hugo_Ekitike_(PSG_2023)_(cropped2).jpg"},
  "endo": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Wataru_End%C5%8D_06042025_(1).jpg"},
  "gravenberch": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Ryan_Gravenberch_06042025_(1)_(cropped).jpg"},
  "frimpong": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Jeremie_Frimpong_04012026_(1).jpg"},
  "araujo": {"artist": "Olga Shcherbytska", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:%D0%9C%D0%B0%D1%82%D1%87_%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB_-_%C2%AB%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0%C2%BB_0-1._2_%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0_2021_%D1%80%D0%BE%D0%BA%D1%83_%E2%80%94_1289463_(Ronald_Ara%C3%BAjo).jpg"},
  "kerkez": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Milos_Kerkez_04012026_(1).jpg"},
  "barcola": {"artist": "Bryan Berlin", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0", "source": "https://commons.wikimedia.org/wiki/File:Bradley_Barcola_France_v_Norway_26_June_26-033_(cropped).jpg"},
  "jones": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Curtis_Jones_06042025_(1).jpg"},
  "chiesa": {"artist": "Timmy96", "license": "CC0", "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/deed.en", "source": "https://commons.wikimedia.org/wiki/File:Federico_Chiesa_04012026_(1).jpg"}
};

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
