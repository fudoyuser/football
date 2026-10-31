// Đội hình Manchester United 2026/27, dùng để tự sinh câu hỏi "Nhìn ảnh đoán tên", "Quốc tịch" và "CLB cũ".
// group: gk/df/mf/fw (icon vị trí); from: CLB trước khi đến MU, null nếu trưởng thành từ học viện;
// nationality: null nếu chưa xác định chắc chắn (khi đó không sinh câu hỏi quốc tịch).
const PLAYERS = [
  { slug: "lammens", name: "Senne Lammens", number: 1, group: "gk", position: "Thủ môn", nationality: "Bỉ", from: "Royal Antwerp" },
  { slug: "darlow", name: "Karl Darlow", number: 12, group: "gk", position: "Thủ môn", nationality: "Xứ Wales", from: "Leeds United" },
  { slug: "heaton", name: "Tom Heaton", number: 22, group: "gk", position: "Thủ môn", nationality: "Anh", from: "Aston Villa" },
  { slug: "mee", name: "Dermot Mee", number: 45, group: "gk", position: "Thủ môn", nationality: null, from: null },
  { slug: "dalot", name: "Diogo Dalot", number: 2, group: "df", position: "Hậu vệ phải", nationality: "Bồ Đào Nha", from: "Porto" },
  { slug: "mazraoui", name: "Noussair Mazraoui", number: 3, group: "df", position: "Hậu vệ phải", nationality: "Maroc", from: "Bayern Munich" },
  { slug: "de-ligt", name: "Matthijs de Ligt", number: 4, group: "df", position: "Trung vệ", nationality: "Hà Lan", from: "Bayern Munich" },
  { slug: "maguire", name: "Harry Maguire", number: 5, group: "df", position: "Trung vệ", nationality: "Anh", from: "Leicester City" },
  { slug: "martinez", name: "Lisandro Martínez", number: 6, group: "df", position: "Trung vệ", nationality: "Argentina", from: "Ajax" },
  { slug: "dorgu", name: "Patrick Dorgu", number: 13, group: "df", position: "Hậu vệ trái", nationality: "Đan Mạch", from: "Lecce" },
  { slug: "yoro", name: "Leny Yoro", number: 15, group: "df", position: "Trung vệ", nationality: "Pháp", from: "Lille" },
  { slug: "shaw", name: "Luke Shaw", number: 23, group: "df", position: "Hậu vệ trái", nationality: "Anh", from: "Southampton" },
  { slug: "heaven", name: "Ayden Heaven", number: 26, group: "df", position: "Trung vệ", nationality: "Anh", from: "Arsenal" },
  { slug: "amass", name: "Harry Amass", number: 41, group: "df", position: "Hậu vệ trái", nationality: "Anh", from: null },
  { slug: "mount", name: "Mason Mount", number: 7, group: "mf", position: "Tiền vệ tấn công", nationality: "Anh", from: "Chelsea" },
  { slug: "fernandes", name: "Bruno Fernandes", number: 8, group: "mf", position: "Tiền vệ tấn công", nationality: "Bồ Đào Nha", from: "Sporting CP" },
  { slug: "santos", name: "Andrey Santos", number: 17, group: "mf", position: "Tiền vệ trung tâm", nationality: "Brazil", from: "Chelsea" },
  { slug: "tielemans", name: "Youri Tielemans", number: 18, group: "mf", position: "Tiền vệ trung tâm", nationality: "Bỉ", from: "Aston Villa" },
  { slug: "baleba", name: "Carlos Baleba", number: 20, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Cameroon", from: "Brighton" },
  { slug: "ugarte", name: "Manuel Ugarte", number: 25, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Uruguay", from: "Paris Saint-Germain" },
  { slug: "mainoo", name: "Kobbie Mainoo", number: 37, group: "mf", position: "Tiền vệ trung tâm", nationality: "Anh", from: null },
  { slug: "j-fletcher", name: "Jack Fletcher", number: 38, group: "mf", position: "Tiền vệ trung tâm", nationality: null, from: null },
  { slug: "t-fletcher", name: "Tyler Fletcher", number: 39, group: "mf", position: "Tiền vệ trung tâm", nationality: null, from: null },
  { slug: "collyer", name: "Toby Collyer", number: 43, group: "mf", position: "Tiền vệ phòng ngự", nationality: "Anh", from: null },
  { slug: "cunha", name: "Matheus Cunha", number: 10, group: "fw", position: "Tiền đạo / Tiền vệ tấn công", nationality: "Brazil", from: "Wolverhampton" },
  { slug: "zirkzee", name: "Joshua Zirkzee", number: 11, group: "fw", position: "Tiền đạo cắm", nationality: "Hà Lan", from: "Bologna" },
  { slug: "amad", name: "Amad Diallo", number: 16, group: "fw", position: "Tiền đạo cánh phải", nationality: "Bờ Biển Ngà", from: "Atalanta" },
  { slug: "mbeumo", name: "Bryan Mbeumo", number: 19, group: "fw", position: "Tiền đạo cánh phải", nationality: "Cameroon", from: "Brentford" },
  { slug: "sesko", name: "Benjamin Šeško", number: 30, group: "fw", position: "Tiền đạo cắm", nationality: "Slovenia", from: "RB Leipzig" },
  { slug: "lacey", name: "Shea Lacey", number: 61, group: "fw", position: "Tiền đạo cánh", nationality: "Anh", from: null },
];

// Ảnh trong images/players/, cắt từ ảnh giấy phép tự do trên Wikimedia Commons (xem CREDITS.md).
const PLAYER_PHOTOS = {
};
