# Liverpool FC Quiz ❤️

Website quiz tương tác về Liverpool FC — 30 câu hỏi về **lịch sử & danh hiệu** và **cầu thủ mùa 2026/27**.

## Tính năng
- 3 chế độ: Tổng hợp (30 câu), Chỉ lịch sử (15 câu), Chỉ cầu thủ (15 câu)
- Thứ tự câu hỏi và 4 đáp án được xáo trộn mỗi lần chơi
- Hiện ngay đúng/sai kèm giải thích, progress bar, màn hình kết quả
- Câu lịch sử minh họa bằng icon SVG tự vẽ
- Câu cầu thủ hiển thị ảnh cầu thủ lấy trực tiếp từ Wikipedia (ảnh giấy phép tự do trên Wikimedia Commons, có ghi tác giả + giấy phép); nếu không tải được sẽ dùng card silhouette SVG. Số áo chỉ hiện sau khi trả lời để không lộ đáp án
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
| `photos.js` | Tải ảnh cầu thủ + thông tin bản quyền từ Wikipedia API |
| `app.js` | Logic quiz |

## Chạy local
Mở `index.html` bằng trình duyệt, hoặc:
```bash
python3 -m http.server 8000
```

> Ảnh cầu thủ thuộc về các tác giả tương ứng, sử dụng theo giấy phép ghi dưới mỗi ảnh.
>
> Dự án fan-made, không liên kết chính thức với Liverpool FC.
