# Liverpool FC Quiz ❤️

Website quiz tương tác về Liverpool FC — hơn 130 câu hỏi về **lịch sử & huyền thoại**, **đội hình 2026/27** (số áo, vị trí), **nhìn ảnh đoán tên** và **quốc tịch & CLB cũ**.

## Tính năng
- 5 chế độ: Lịch sử & Huyền thoại, Đội hình 2026/27, Nhìn ảnh đoán tên, Quốc tịch & CLB cũ (20 câu ngẫu nhiên), Tổng hợp (toàn bộ câu hỏi của cả 4 chủ đề)
- Câu ảnh / quốc tịch / CLB cũ được sinh tự động từ dữ liệu đội hình (`players.js`), đáp án nhiễu thay đổi mỗi lượt
- Thứ tự câu hỏi và 4 đáp án được xáo trộn mỗi lần chơi
- Hiện ngay đúng/sai kèm giải thích, progress bar, màn hình kết quả
- Câu lịch sử minh họa bằng icon SVG tự vẽ
- Câu cầu thủ hiển thị ảnh cầu thủ lưu sẵn trong repo (`images/players/`, cắt từ ảnh giấy phép tự do trên Wikimedia Commons, ghi tác giả + giấy phép dưới mỗi ảnh — xem [CREDITS.md](CREDITS.md)); nếu ảnh lỗi sẽ dùng card silhouette SVG. Số áo chỉ hiện sau khi trả lời để không lộ đáp án
- Responsive, hỗ trợ phím tắt (1–4 / A–D để chọn, Enter để sang câu)

## Công nghệ
HTML + CSS + JavaScript thuần, không framework, không build step — deploy trực tiếp bằng GitHub Pages.

## Cấu trúc
| File | Nội dung |
|---|---|
| `index.html` | Bố cục 3 màn hình: trang chủ, quiz, kết quả |
| `style.css` | Giao diện theme đỏ-trắng (#C8102E) |
| `questions.js` | Câu hỏi viết tay (lịch sử, huyền thoại, số áo, vị trí) |
| `players.js` | Dữ liệu đội hình + sinh câu hỏi tự động |
| `icons.js` | Icon SVG lịch sử + card cầu thủ |
| `photos.js` | Thông tin bản quyền + hiển thị ảnh cầu thủ |
| `images/players/` | 15 ảnh cầu thủ 400×500 |
| `CREDITS.md` | Nguồn, tác giả, giấy phép từng ảnh |
| `app.js` | Logic quiz |

## Chạy local
Mở `index.html` bằng trình duyệt, hoặc:
```bash
python3 -m http.server 8000
```

> Ảnh cầu thủ thuộc về các tác giả tương ứng, sử dụng theo giấy phép ghi trong [CREDITS.md](CREDITS.md).
>
> Dự án fan-made, không liên kết chính thức với Liverpool FC.
