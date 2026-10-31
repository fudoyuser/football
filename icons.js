// Icon SVG tự vẽ, phong cách flat/line-art đỏ-trắng. Không dùng ảnh ngoài.
const RED = "#C8102E";
const DARK = "#8A0B20";
const GOLD = "#F6C343";

const svg = (body) =>
  `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <circle cx="60" cy="60" r="58" fill="#fff" stroke="${RED}" stroke-width="3"/>
    ${body}
  </svg>`;

const HISTORY_ICONS = {
  stadium: svg(`
    <path d="M18 70 Q60 40 102 70 L102 86 Q60 66 18 86 Z" fill="${RED}"/>
    <path d="M18 86 Q60 66 102 86 L102 92 Q60 74 18 92 Z" fill="${DARK}"/>
    <ellipse cx="60" cy="84" rx="30" ry="8" fill="#3BA55C" stroke="#fff" stroke-width="1.5"/>
    <line x1="60" y1="76" x2="60" y2="92" stroke="#fff" stroke-width="1.2"/>
    <line x1="28" y1="40" x2="28" y2="66" stroke="${RED}" stroke-width="3"/>
    <line x1="92" y1="40" x2="92" y2="66" stroke="${RED}" stroke-width="3"/>
    <rect x="22" y="34" width="12" height="7" rx="2" fill="${GOLD}"/>
    <rect x="86" y="34" width="12" height="7" rx="2" fill="${GOLD}"/>`),

  jersey: svg(`
    <path d="M42 28 L30 34 L18 50 L30 58 L36 52 L36 94 L84 94 L84 52 L90 58 L102 50 L90 34 L78 28 Q60 40 42 28 Z" fill="${RED}" stroke="${DARK}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M48 30 Q60 38 72 30" fill="none" stroke="#fff" stroke-width="3"/>
    <circle cx="70" cy="50" r="5" fill="#fff"/>`),

  note: svg(`
    <path d="M46 30 L88 22 L88 76" fill="none" stroke="${RED}" stroke-width="6" stroke-linejoin="round"/>
    <line x1="46" y1="30" x2="46" y2="84" stroke="${RED}" stroke-width="6"/>
    <ellipse cx="38" cy="86" rx="11" ry="8" fill="${RED}"/>
    <ellipse cx="80" cy="78" rx="11" ry="8" fill="${RED}"/>
    <path d="M46 42 L88 34" stroke="${DARK}" stroke-width="5"/>`),

  rivalry: svg(`
    <path d="M24 36 L54 36 L54 60 Q54 78 39 86 Q24 78 24 60 Z" fill="${RED}"/>
    <path d="M66 36 L96 36 L96 60 Q96 78 81 86 Q66 78 66 60 Z" fill="#1B3F94"/>
    <path d="M56 50 L64 58 M64 50 L56 58" stroke="#333" stroke-width="3" stroke-linecap="round"/>
    <text x="60" y="104" text-anchor="middle" font-size="11" font-weight="700" fill="#333" font-family="sans-serif">DERBY</text>`),

  crowd: svg(`
    <rect x="16" y="76" width="88" height="20" rx="4" fill="${DARK}"/>
    ${[22, 38, 54, 70, 86].map((x, i) => `
      <circle cx="${x + 6}" cy="${i % 2 ? 56 : 52}" r="7" fill="${RED}"/>
      <path d="M${x - 2} 76 Q${x + 6} ${i % 2 ? 60 : 56} ${x + 14} 76 Z" fill="${RED}"/>`).join("")}
    <path d="M24 46 L20 30 M96 46 L100 30" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>
    <rect x="44" y="20" width="32" height="14" rx="3" fill="#fff" stroke="${RED}" stroke-width="2"/>
    <text x="60" y="31" text-anchor="middle" font-size="10" font-weight="800" fill="${RED}" font-family="sans-serif">KOP</text>`),

  crest: svg(`
    <path d="M30 22 L90 22 L90 62 Q90 90 60 102 Q30 90 30 62 Z" fill="${RED}" stroke="${DARK}" stroke-width="2"/>
    <path d="M30 22 L90 22 L90 62 Q90 90 60 102 Q30 90 30 62 Z" fill="none" stroke="#fff" stroke-width="2" transform="translate(60 62) scale(.86) translate(-60 -62)"/>
    <!-- Chim cách điệu -->
    <path d="M46 54 Q52 40 64 44 Q72 38 78 44 Q70 46 68 52 Q72 62 62 72 Q54 76 48 70 Q56 66 54 60 Z" fill="${GOLD}"/>
    <path d="M78 44 L84 46 L78 48 Z" fill="${GOLD}"/>`),

  trophy: svg(`
    <path d="M40 26 L80 26 L78 54 Q76 70 60 72 Q44 70 42 54 Z" fill="${GOLD}" stroke="#B8860B" stroke-width="2"/>
    <path d="M40 32 Q24 32 26 46 Q28 56 42 56" fill="none" stroke="#B8860B" stroke-width="4"/>
    <path d="M80 32 Q96 32 94 46 Q92 56 78 56" fill="none" stroke="#B8860B" stroke-width="4"/>
    <rect x="55" y="72" width="10" height="12" fill="#B8860B"/>
    <rect x="42" y="84" width="36" height="12" rx="2" fill="${RED}"/>
    <path d="M60 36 L63 43 L70 43 L64 48 L66 55 L60 51 L54 55 L56 48 L50 43 L57 43 Z" fill="#fff"/>`),

  coach: svg(`
    <circle cx="60" cy="40" r="14" fill="${RED}"/>
    <path d="M30 98 Q30 62 60 60 Q90 62 90 98 Z" fill="${DARK}"/>
    <path d="M52 62 L60 76 L68 62" fill="#fff"/>
    <rect x="74" y="66" width="22" height="28" rx="3" fill="#fff" stroke="${RED}" stroke-width="2"/>
    <circle cx="80" cy="74" r="2" fill="${RED}"/><circle cx="90" cy="86" r="2" fill="${RED}"/>
    <path d="M80 74 L90 86" stroke="${RED}" stroke-width="1.5" stroke-dasharray="2 2"/>`),

  "euro-cup": svg(`
    <path d="M44 24 L76 24 L74 60 Q72 74 60 76 Q48 74 46 60 Z" fill="#E6E6E6" stroke="#999" stroke-width="2"/>
    <path d="M44 30 Q22 28 24 48 Q28 62 46 58" fill="none" stroke="#999" stroke-width="5"/>
    <path d="M76 30 Q98 28 96 48 Q92 62 74 58" fill="none" stroke="#999" stroke-width="5"/>
    <rect x="55" y="76" width="10" height="8" fill="#999"/>
    <rect x="42" y="84" width="36" height="12" rx="2" fill="${RED}"/>
    <text x="60" y="94" text-anchor="middle" font-size="10" font-weight="800" fill="#fff" font-family="sans-serif">×6</text>`),

  comeback: svg(`
    <text x="60" y="52" text-anchor="middle" font-size="22" font-weight="800" fill="#999" font-family="sans-serif">0–3</text>
    <path d="M36 62 Q60 80 84 62" fill="none" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>
    <path d="M84 62 L76 62 M84 62 L82 70" stroke="${RED}" stroke-width="4" stroke-linecap="round"/>
    <text x="60" y="98" text-anchor="middle" font-size="22" font-weight="800" fill="${RED}" font-family="sans-serif">3–3</text>`),
};

// Icon nhỏ thể hiện vị trí (vẽ trong ô 28x28)
const POSITION_BADGES = {
  gk: { label: "Thủ môn", path: `
    <path d="M8 22 L8 12 Q8 9 10 9 L10 7 Q10 5 12 5 Q13 5 13 7 L13 6 Q13 4 15 4 Q17 4 17 6 L17 7 Q17 5 19 5 Q21 5 21 8 L21 22 Z" fill="#fff"/>
    <rect x="8" y="20" width="13" height="4" fill="${GOLD}"/>` },
  df: { label: "Hậu vệ", path: `
    <path d="M14 4 L23 7 L23 14 Q23 21 14 25 Q5 21 5 14 L5 7 Z" fill="#fff"/>
    <path d="M14 8 L14 21" stroke="${RED}" stroke-width="2"/>` },
  mf: { label: "Tiền vệ", path: `
    <path d="M20 9 A8 8 0 1 0 22 16" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
    <path d="M16 5 L22 9 L16 12 Z" fill="#fff"/>` },
  fw: { label: "Tiền đạo", path: `
    <path d="M4 18 L10 8 L14 8 L15 13 Q22 14 24 18 L24 21 L4 21 Z" fill="#fff"/>
    <path d="M6 23 L8 23 M12 23 L14 23 M18 23 L20 23" stroke="#fff" stroke-width="2"/>` },
};

// Card silhouette cầu thủ: áo đỏ, số áo to giữa ngực, badge vị trí góc dưới phải.
function playerCard(pos, number) {
  const badge = POSITION_BADGES[pos];
  const isGk = pos === "gk";
  const shirt = isGk ? "#1E7F4F" : RED; // thủ môn mặc áo khác màu cho dễ phân biệt
  const shirtDark = isGk ? "#145C38" : DARK;
  return `<svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${badge.label}, áo số ${number}">
    <defs>
      <linearGradient id="bg-${pos}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#FBE3E7"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="116" height="136" rx="12" fill="url(#bg-${pos})" stroke="${RED}" stroke-width="3"/>
    <!-- đầu -->
    <circle cx="60" cy="30" r="14" fill="#3A3A3A"/>
    <rect x="54" y="40" width="12" height="8" fill="#3A3A3A"/>
    <!-- áo -->
    <path d="M38 48 L22 58 L14 80 L28 86 L34 72 L34 124 L86 124 L86 72 L92 86 L106 80 L98 58 L82 48 Q60 58 38 48 Z"
          fill="${shirt}" stroke="${shirtDark}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M48 50 Q60 58 72 50" fill="none" stroke="#fff" stroke-width="2.5"/>
    <text x="60" y="104" text-anchor="middle" font-size="${number >= 10 ? 34 : 38}" font-weight="900"
          fill="#fff" font-family="Arial Black, Arial, sans-serif">${number}</text>
    <!-- badge vị trí -->
    <g transform="translate(84 104)">
      <circle cx="14" cy="14" r="15" fill="${shirtDark}" stroke="#fff" stroke-width="2"/>
      ${badge.path}
    </g>
  </svg>`;
}

function getIllustration(q) {
  if (q.iconType.startsWith("player-")) {
    return playerCard(q.iconType.slice(7), q.number);
  }
  return HISTORY_ICONS[q.iconType] || HISTORY_ICONS.crest;
}
