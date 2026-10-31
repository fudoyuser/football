# Football Quiz ⚽

Website quiz bóng đá tương tác — chọn đội rồi thử sức với lịch sử, huyền thoại và đội hình hiện tại.

**Các đội hiện có**
- **Liverpool FC** (`liverpool/`)
- **Manchester United** (`manutd/`)

## Tính năng
- Mỗi đội có 5 chế độ: Lịch sử & Huyền thoại, Đội hình 2026/27 (số áo & vị trí), Nhìn ảnh đoán tên, Quốc tịch & CLB cũ (20 câu ngẫu nhiên), Tổng hợp (toàn bộ câu hỏi)
- Câu ảnh / quốc tịch / CLB cũ được sinh tự động từ dữ liệu đội hình, đáp án nhiễu thay đổi mỗi lượt
- Thứ tự câu hỏi và 4 đáp án được xáo trộn mỗi lần chơi; hiện ngay đúng/sai kèm giải thích
- Ảnh cầu thủ lưu trong repo, cắt từ ảnh giấy phép tự do trên Wikimedia Commons, ghi tác giả + giấy phép dưới mỗi ảnh; cầu thủ chưa có ảnh dùng card silhouette SVG. Số áo / vị trí chỉ hiện sau khi trả lời nếu câu hỏi đang hỏi chính thông tin đó
- Icon lịch sử vẽ bằng SVG, tô theo màu từng đội
- Responsive, phím tắt 1–4 / A–D để chọn, Enter để sang câu

## Công nghệ
HTML + CSS + JavaScript thuần, không framework, không build step — deploy trực tiếp bằng GitHub Pages.

## Cấu trúc
| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang chọn đội |
| `shared/` | Code dùng chung: `style.css`, `icons.js`, `photos.js`, `players.js` (sinh câu hỏi), `app.js` (logic quiz) |
| `<đội>/index.html` | Trang quiz của đội |
| `<đội>/team.js` | Màu sắc, tên gọi, chi tiết icon của đội |
| `<đội>/squad.js` | Đội hình (số áo, vị trí, quốc tịch, CLB cũ) + nguồn ảnh |
| `<đội>/questions.js` | Câu hỏi viết tay |
| `<đội>/images/players/`, `<đội>/CREDITS.md` | Ảnh cầu thủ và nguồn/giấy phép |

## Thêm đội mới
Sao chép một thư mục đội (vd. `manutd/`), sửa `team.js`, `squad.js`, `questions.js` và chữ trong `index.html`, rồi thêm thẻ đội vào `index.html` ở thư mục gốc.

## Chạy local
```bash
python3 -m http.server 8000
```

> Ảnh cầu thủ thuộc về các tác giả tương ứng, sử dụng theo giấy phép ghi trong `CREDITS.md` của từng đội.
>
> Dự án fan-made, không liên kết chính thức với các CLB.
