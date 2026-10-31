// Dữ liệu đội hình 2026/27, dùng để tự sinh câu hỏi "Nhìn ảnh đoán tên", "Quốc tịch" và "CLB cũ".
// group: gk/df/mf/fw (icon vị trí); from: CLB trước khi đến Liverpool, null nếu trưởng thành từ học viện.
const PLAYERS = [
  { slug: "alisson", name: "Alisson Becker", number: 1, group: "gk", position: "Thủ môn", nationality: "Brazil", from: "AS Roma" },
  { slug: "mamardashvili", name: "Giorgi Mamardashvili", number: 25, group: "gk", position: "Thủ môn", nationality: "Georgia", from: "Valencia" },
  { slug: "woodman", name: "Freddie Woodman", number: 28, group: "gk", position: "Thủ môn", nationality: "Anh", from: "Preston North End" },
  { slug: "jaros", name: "Vítězslav Jaroš", number: 56, group: "gk", position: "Thủ môn", nationality: "Cộng hòa Séc", from: null },
  { slug: "davies", name: "Harvey Davies", number: 95, group: "gk", position: "Thủ môn", nationality: "Anh", from: null },
  { slug: "gomez", name: "Joe Gomez", number: 2, group: "df", position: "Trung vệ / Hậu vệ phải", nationality: "Anh", from: "Charlton Athletic" },
  { slug: "van-dijk", name: "Virgil van Dijk", number: 4, group: "df", position: "Trung vệ", nationality: "Hà Lan", from: "Southampton" },
  { slug: "jacquet", name: "Jérémy Jacquet", number: 5, group: "df", position: "Trung vệ", nationality: "Pháp", from: "Rennes" },
  { slug: "kerkez", name: "Milos Kerkez", number: 6, group: "df", position: "Hậu vệ trái", nationality: "Hungary", from: "Bournemouth" },
  { slug: "bradley", name: "Conor Bradley", number: 12, group: "df", position: "Hậu vệ phải", nationality: "Bắc Ireland", from: null },
  { slug: "leoni", name: "Giovanni Leoni", number: 15, group: "df", position: "Trung vệ", nationality: "Ý", from: "Parma" },
  { slug: "tsimikas", name: "Kostas Tsimikas", number: 21, group: "df", position: "Hậu vệ trái", nationality: "Hy Lạp", from: "Olympiacos" },
  { slug: "frimpong", name: "Jeremie Frimpong", number: 30, group: "df", position: "Hậu vệ phải", nationality: "Hà Lan", from: "Bayer Leverkusen" },
  { slug: "araujo", name: "Ronald Araujo", number: 33, group: "df", position: "Trung vệ", nationality: "Uruguay", from: "Barcelona" },
  { slug: "ramsay", name: "Calvin Ramsay", number: 47, group: "df", position: "Hậu vệ phải", nationality: "Scotland", from: "Aberdeen" },
  { slug: "endo", name: "Wataru Endo", number: 3, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Nhật Bản", from: "VfB Stuttgart" },
  { slug: "wirtz", name: "Florian Wirtz", number: 7, group: "mf", position: "Tiền vệ tấn công", nationality: "Đức", from: "Bayer Leverkusen" },
  { slug: "szoboszlai", name: "Dominik Szoboszlai", number: 8, group: "mf", position: "Tiền vệ trung tâm", nationality: "Hungary", from: "RB Leipzig" },
  { slug: "mac-allister", name: "Alexis Mac Allister", number: 10, group: "mf", position: "Tiền vệ trung tâm", nationality: "Argentina", from: "Brighton" },
  { slug: "jones", name: "Curtis Jones", number: 17, group: "mf", position: "Tiền vệ trung tâm", nationality: "Anh", from: null },
  { slug: "elliott", name: "Harvey Elliott", number: 19, group: "mf", position: "Tiền vệ tấn công", nationality: "Anh", from: "Fulham" },
  { slug: "gravenberch", name: "Ryan Gravenberch", number: 38, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Hà Lan", from: "Bayern Munich" },
  { slug: "nyoni", name: "Trey Nyoni", number: 42, group: "mf", position: "Tiền vệ trung tâm", nationality: "Anh", from: "Leicester City" },
  { slug: "bajcetic", name: "Stefan Bajčetić", number: 43, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Tây Ban Nha", from: null },
  { slug: "mcconnell", name: "James McConnell", number: 53, group: "mf", position: "Tiền vệ trung tâm", nationality: "Anh", from: null },
  { slug: "isak", name: "Alexander Isak", number: 9, group: "fw", position: "Tiền đạo cắm", nationality: "Thụy Điển", from: "Newcastle United" },
  { slug: "chiesa", name: "Federico Chiesa", number: 14, group: "fw", position: "Tiền đạo cánh", nationality: "Ý", from: "Juventus" },
  { slug: "gakpo", name: "Cody Gakpo", number: 18, group: "fw", position: "Tiền đạo cánh trái", nationality: "Hà Lan", from: "PSV Eindhoven" },
  { slug: "ekitike", name: "Hugo Ekitike", number: 22, group: "fw", position: "Tiền đạo cắm", nationality: "Pháp", from: "Eintracht Frankfurt" },
  { slug: "munoz", name: "Víctor Muñoz", number: 23, group: "fw", position: "Tiền đạo cánh", nationality: "Tây Ban Nha", from: "Osasuna" },
  { slug: "barcola", name: "Bradley Barcola", number: 29, group: "fw", position: "Tiền đạo cánh trái", nationality: "Pháp", from: "Paris Saint-Germain" },
  { slug: "ngumoha", name: "Rio Ngumoha", number: 73, group: "fw", position: "Tiền đạo cánh trái", nationality: "Anh", from: null },
];

// Đáp án gây nhiễu bổ sung để luôn đủ 3 lựa chọn sai khác nhau
const EXTRA_NATIONALITIES = ["Bồ Đào Nha", "Bỉ", "Croatia", "Đan Mạch", "Ba Lan", "Thụy Sĩ"];
const EXTRA_CLUBS = ["Chelsea", "Tottenham Hotspur", "Real Madrid", "Atlético Madrid", "AC Milan", "Borussia Dortmund", "Ajax", "Benfica", "Napoli"];

function sample(arr, n) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, n);
}

// 3 đáp án sai: ưu tiên lấy từ dữ liệu thật (cùng nhóm nếu có), thiếu thì lấy từ danh sách bổ sung
function distractors(correct, pool, extra) {
  const uniq = [...new Set(pool.filter((x) => x && x !== correct))];
  const picked = sample(uniq, 3);
  return picked.length === 3 ? picked : picked.concat(sample(extra.filter((x) => x !== correct && !picked.includes(x)), 3 - picked.length));
}

const playerBase = (p) => ({
  category: "", iconType: `player-${p.group}`, number: p.number, position: p.position, photo: p.slug,
});

// Dạng 1: nhìn ảnh đoán tên (chỉ cầu thủ đã có ảnh)
function photoQuestions() {
  return PLAYERS.filter((p) => PLAYER_PHOTOS[p.slug]).map((p) => {
    const sameGroup = PLAYERS.filter((o) => o.group === p.group).map((o) => o.name);
    return {
      ...playerBase(p), id: `photo-${p.slug}`, category: "photo",
      question: "Cầu thủ trong ảnh là ai?",
      options: [p.name, ...distractors(p.name, sameGroup.length > 3 ? sameGroup : PLAYERS.map((o) => o.name), [])],
      correctIndex: 0,
      explanation: `Đây là ${p.name} — ${p.position.toLowerCase()}, áo số ${p.number}.`,
    };
  });
}

// Dạng 2 + 3: quốc tịch và CLB cũ
function originQuestions() {
  const nat = PLAYERS.map((p) => ({
    ...playerBase(p), id: `nat-${p.slug}`, category: "origin",
    question: `${p.name} mang quốc tịch nước nào?`,
    options: [p.nationality, ...distractors(p.nationality, PLAYERS.map((o) => o.nationality), EXTRA_NATIONALITIES)],
    correctIndex: 0,
    explanation: `${p.name} là cầu thủ người ${p.nationality}.`,
  }));
  const clubs = PLAYERS.filter((p) => p.from).map((p) => ({
    ...playerBase(p), id: `club-${p.slug}`, category: "origin",
    question: `${p.name} gia nhập Liverpool từ CLB nào?`,
    options: [p.from, ...distractors(p.from, PLAYERS.map((o) => o.from), EXTRA_CLUBS)],
    correctIndex: 0,
    explanation: `${p.name} chuyển đến Liverpool từ ${p.from}.`,
  }));
  return nat.concat(clubs);
}
