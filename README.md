# Liverpool FC Quiz ❤️

Website quiz tương tác về Liverpool FC — 30 câu hỏi về **lịch sử & danh hiệu** và **cầu thủ mùa 2026/27**.

## Tính năng
- 3 chế độ: Tổng hợp (30 câu), Chỉ lịch sử (15 câu), Chỉ cầu thủ (15 câu)
- Thứ tự câu hỏi và 4 đáp án được xáo trộn mỗi lần chơi
- Hiện ngay đúng/sai kèm giải thích, progress bar, màn hình kết quả
- Minh họa hoàn toàn bằng SVG tự vẽ (không dùng ảnh thật cầu thủ): icon lịch sử và card silhouette áo đỏ in số áo + biểu tượng vị trí
- Responsive, hỗ trợ phím tắt (1–4 / A–D để chọn, Enter để sang câu)

## Công nghệ
HTML + CSS + JavaScript thuần, không framework, không build step — deploy trực tiếp bằng GitHub Pages.

## Cấu trúc
| File | Nội dung |
|---|---|
| `index.html` | Bố cục 3 màn hình: trang chủ, quiz, kết quả |
| `style.css` | Giao diện theme đỏ-trắng (#C8102E) |
| `questions.js` | Ngân hàng 30 câu hỏi |
| `icons.js` | Icon SVG lịch sử + card cầu thủ |
| `app.js` | Logic quiz |

## Chạy local
Mở `index.html` bằng trình duyệt, hoặc:
```bash
python3 -m http.server 8000
```

> Dự án fan-made, không liên kết chính thức với Liverpool FC.
