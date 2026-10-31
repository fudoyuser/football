// Sinh câu hỏi "Nhìn ảnh đoán tên", "Quốc tịch" và "CLB cũ" từ PLAYERS trong squad.js của từng đội.

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
  const nat = PLAYERS.filter((p) => p.nationality).map((p) => ({
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
