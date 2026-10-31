# Liverpool FC Quiz ❤️

Website quiz tương tác về Liverpool FC — 30 câu hỏi về **lịch sử & danh hiệu** và **cầu thủ mùa 2026/27**.

## Tính năng
- 3 chế độ: Tổng hợp (30 câu), Chỉ lịch sử (15 câu), Chỉ cầu thủ (15 câu)
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
| `questions.js` | Ngân hàng 30 câu hỏi |
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
