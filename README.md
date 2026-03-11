<div align="center">

<h1>🌙 AMoon GenZ JS</h1>

<p><b>Compiler hệ tâm linh dành cho CEO GenZ — Lập trình bằng tiếng Việt thuần khiết</b></p>

[![NPM Version](https://img.shields.io/npm/v/amoon-js?color=red&style=for-the-badge)](https://www.npmjs.com/package/amoon-js)
[![GitHub Release](https://img.shields.io/github/v/release/MiniSharkCraft/AMoon-GenZ-JS?color=brightgreen&label=Github&style=for-the-badge)](https://github.com/MiniSharkCraft/AMoon-GenZ-JS)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/MiniSharkCraft/AMoon-GenZ-JS/blob/main/LICENSE)
[![GenZ Language](https://img.shields.io/badge/Language-GenZ%2FVN-orange?style=for-the-badge)](https://github.com/MiniSharkCraft/AMoon-GenZ-JS)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/MiniSharkCraft/AMoon-GenZ-JS?label=Code%20Dạo&style=for-the-badge)](https://github.com/MiniSharkCraft/AMoon-GenZ-JS/graphs/commit-activity)

<br/>

<i>"Code bằng niềm tin, chạy bằng nhân phẩm!"</i>

</div>

---

## 🤔 AMoon là gì?

**AMoon GenZ JS** là một trình biên dịch (compiler/transpiler) cho phép mày viết JavaScript bằng **tiếng Việt GenZ** rồi compile ra JS thật để chạy.

Thay vì gõ `const`, `async`, `try/catch` như người bình thường, mày gõ `chốt_kèo`, `bất_biến`, `bắt_thằng_vấp_cỏ / đm_lỗi_kìa` — và máy tính vẫn hiểu. Không đùa.

Ngoài JS còn hỗ trợ **HTML** và **CSS** với từ vựng riêng.

> ⚠️ **CẢNH BÁO**: Nếu mày không biết tiếng Việt, mày đang bỏ lỡ cả một nền văn minh code.  
> Learn Vietnamese or Cút! 🐧☝️

---

## 📋 Mục lục

- [Cài đặt](#-cài-đặt)
- [Cách dùng](#-cách-dùng)
- [Extensions](#-extensions)
- [Từ điển](#-từ-điển)
  - [JavaScript](#-javascript-agz)
  - [HTML](#-html-hagz)
  - [CSS](#-css-cagz)
- [Demo thực tế](#-demo-thực-tế)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Đóng góp](#-đóng-góp)

---

## 📦 Cài đặt

**Cách 1 — Cài global qua NPM (khuyên dùng):**

```bash
npm install -g amoon-js
```

**Cách 2 — Clone về rồi tự build:**

```bash
git clone https://github.com/MiniSharkCraft/AMoon-GenZ-JS.git
cd AMoon-GenZ-JS
npm link
```

Sau khi cài, lệnh `amoon` sẽ available toàn hệ thống.

---

## 🎮 Cách dùng

```
amoon run   <file.agz>        Dịch và chạy JavaScript GenZ
amoon run   <file.hagz>       Dịch HTML GenZ ra HTML thật
amoon run   <file.cagz>       Dịch CSS GenZ ra CSS thật
amoon build                   Build toàn bộ file trong thư mục hiện tại
amoon check <file>            Xem sẽ dịch được bao nhiêu từ trong file
amoon list  [js|html|css]     Xem toàn bộ từ điển
amoon stats                   Thống kê số lượng thuật ngữ
amoon clear                   Dọn .cache_amoon
```

Code đã dịch được lưu tạm vào thư mục `.cache_amoon/` — không ảnh hưởng đến file gốc.

**Debug mode** nếu cần xem lỗi chi tiết:

```bash
DEBUG=1 amoon run file.agz
```

---

## 📁 Extensions

| Extension | Dịch ra | Mô tả |
|-----------|---------|-------|
| `.agz`    | `.js`   | AMoon GenZ JavaScript |
| `.hagz`   | `.html` | HTML AMoon GenZ |
| `.cagz`   | `.css`  | CSS AMoon GenZ |

---

## 📖 Từ điển

Tổng cộng **874 thuật ngữ** chia làm 3 ngôn ngữ. Dưới đây là những từ hay dùng nhất.

---

### ⚡ JavaScript (`.agz`)

#### Cốt lõi — Syntax

| GenZ | JavaScript |
|------|-----------|
| `chốt_kèo` | `const` |
| `biến_thể` | `let` |
| `kỹ_năng` | `function` |
| `cook` | `return` |
| `đợi_tí` | `await` |
| `bất_biến` | `async` |
| `nhập_hàng` | `import` |
| `xuất_khẩu` | `export` |
| `triệu_hồi` | `require` |
| `nguồn_gốc` | `from` |
| `mới_tinh` | `new` |
| `trong_lớp` | `class` |
| `mở_rộng` | `extends` |
| `la_làng` | `console.log` |

#### Điều kiện & Vòng lặp

| GenZ | JavaScript |
|------|-----------|
| `với_điều_kiện` | `if` |
| `còn_không_thì` | `else` |
| `cũng_được_chứ` | `else if` |
| `cày_cuốc` | `for` |
| `dạo_quanh` | `of` |
| `vòng_lặp_vô_tận` | `while` |
| `chọn_mặt_gửi_vàng` | `switch` |
| `trường_hợp` | `case` |
| `ngắt_kết_nối` | `break` |
| `đi_tiếp_đi` | `continue` |

#### Logic & Giá trị

| GenZ | JavaScript |
|------|-----------|
| `mãi_yêu` | `true` |
| `hết_yêu` | `false` |
| `mập_mờ` | `null` |
| `người_lạ_ơi` | `undefined` |
| `clgv` | `undefined` |
| `đéo_có_đâu` | `null` |
| `trùng_khớp` | `===` |
| `không_phải_mày` | `!==` |
| `và_lại` | `&&` |
| `hoặc_là` | `\|\|` |
| `phủ_nhận` | `!` |
| `hỏi_chấm_chấm` | `??` |
| `hỏi_chấm_một` | `?.` |

#### Error Handling (Phần hay nhất)

| GenZ | JavaScript |
|------|-----------|
| `bắt_thằng_vấp_cỏ` | `try` |
| `đm_lỗi_kìa` | `catch` |
| `dù_sao_thì` | `finally` |
| `ném_mẹ_đi` | `throw new Error` |
| `cút_luôn` | `process.exit(1)` |

#### HTTP Status Codes

| GenZ | Status |
|------|--------|
| `200_oke` | `status(200)` |
| `sinh_thành_mới` | `status(201)` |
| `cái_lol_gì_mày_gửi` | `status(400)` |
| `mày_là_ai` | `status(401)` |
| `éo_cho_vào` | `status(403)` |
| `nhìn_cái_cc` | `status(404)` |
| `tao_nhanh_lắm` | `status(429)` |
| `ăn_hại` | `status(500)` |
| `server_đang_ngủ` | `status(503)` |

#### Web & HTTP

| GenZ | JavaScript |
|------|-----------|
| `đi_chợ` | `fetch` |
| `đớp` | `GET` |
| `tỏ_tình` | `POST` |
| `chỉnh_sửa` | `PUT` |
| `vá_víu` | `PATCH` |
| `chia_tay` | `DELETE` |
| `hỏi_thăm` | `request` |
| `trả_lời_tin_nhắn` | `response` |
| `vật_tế_thần` | `middleware` |
| `thẻ_vàng` | `token` |
| `hộ_chiếu` | `auth` |
| `đầu_gấu` | `header` |
| `hàng_về` | `body` |
| `đường_dây_nóng` | `url` |
| `phọt_json` | `JSON.stringify` |
| `nuốt_json` | `JSON.parse` |

#### Array Methods

| GenZ | JavaScript |
|------|-----------|
| `biến_hình` | `.map()` |
| `thằng_phèn` | `.filter()` |
| `gom_xác` | `.reduce()` |
| `xếp_hàng` | `.push()` |
| `đuổi_về` | `.pop()` |
| `crush` | `.find()` |
| `đảo_ngói` | `.reverse()` |
| `chia_gia_tài` | `.slice()` |
| `mổ_bụng` | `.splice()` |
| `tất_cả_ngoan` | `.every()` |
| `kiểm_tra_dân` | `.some()` |
| `có_không` | `.includes()` |
| `tụ_họp` | `.join()` |
| `sắp_xếp_thứ_bậc` | `.sort()` |

#### Promise

| GenZ | JavaScript |
|------|-----------|
| `thề_non_hẹn_biển` | `Promise` |
| `đang_vận_nội_công` | `pending` |
| `đắc_đạo` | `fulfilled` |
| `tẩu_hỏa_nhập_ma` | `rejected` |
| `đợi_tất_cả` | `Promise.all` |
| `ai_xong_trước` | `Promise.race` |
| `đợi_tất_cả_kể_cả_fail` | `Promise.allSettled` |
| `giải_quyết` | `resolve` |
| `ngu_thì_chết` | `reject` |

#### React Hooks

| GenZ | React |
|------|-------|
| `nội_tâm` | `state` |
| `thay_lòng_đổi_dạ` | `setState` |
| `nghiện_ngập` | `useEffect` |
| `nhớ_nhung` | `useMemo` |
| `gọi_hồn_hooks` | `useCallback` |
| `vẻ_bề_ngoài` | `props` |
| `mặt_nạ` | `component` |
| `lên_đồ` | `render` |
| `ảo_thật_đấy` | `ref` |
| `truyền_đạo` | `context` |
| `cắm_sạc` | `mount` |
| `rút_sạc` | `unmount` |

#### Console

| GenZ | JavaScript |
|------|-----------|
| `la_làng` | `console.log` |
| `vạch_mặt` | `console.debug` |
| `la_làng_cảnh_báo` | `console.warn` |
| `khóc_tiếng_máng` | `console.error` |
| `xếp_hàng_chờ_chửi` | `console.table` |
| `đếm_ngày_xa_em` | `console.count` |
| `dọn_màn_hình` | `console.clear` |

#### Thời gian

| GenZ | JavaScript |
|------|-----------|
| `hẹn_giờ_nổ` | `setTimeout` |
| `nhắc_lại_cho_nhớ` | `setInterval` |
| `hồn_bay_phách_lạc` | `clearTimeout` |
| `ngược_dòng_thời_gian` | `Date` |
| `ngủ_nướng` | `sleep` |

#### DevOps & Server

| GenZ | Ý nghĩa |
|------|---------|
| `cúng_cụ` | `deploy` |
| `đóng_thùng` | `dockerize` |
| `dàn_trận` | `docker-compose` |
| `ảo_hóa` | `kubernetes` |
| `nhân_giống` | `scale` |
| `đường_ống` | `pipeline` |
| `thật_thật` | `production` |
| `chạy_thử_nghiệm` | `staging` |
| `bếp_nhà` | `localhost` |
| `nhớ_đệm` | `cache` |

#### Git

| GenZ | Git |
|------|-----|
| `nhập_ngũ` | `commit` |
| `đẩy_ra_đảo` | `push` |
| `về_với_đất_mẹ` | `pull` |
| `chia_bè_phái` | `branch` |
| `hòa_giải` | `merge` |
| `chiến_tranh_lạnh` | `conflict` |
| `nhân_bản_vô_tính` | `clone` |
| `lật_kèo` | `revert` |
| `nhặt_anh_đào` | `cherry-pick` |
| `vứt_xó` | `stash` |
| `làm_lại` | `rebase` |
| `phân_tích_tội_lỗi` | `git blame` |

---

### 🌐 HTML (`.hagz`)

#### Cấu trúc

| GenZ | HTML |
|------|------|
| `khai_sinh` | `<!DOCTYPE html>` |
| `dân_chơi` | `html` |
| `não_to` | `head` |
| `thân_xác` | `body` |
| `tiêu_đề_lớn` | `title` |
| `thông_tin_ẩn` | `meta` |
| `kịch_bản` | `script` |
| `phong_cách` | `style` |

#### Tiêu đề

| GenZ | HTML |
|------|------|
| `đại_ca_chữ` | `h1` |
| `anh_hai` | `h2` |
| `anh_ba` | `h3` |
| `anh_bốn` | `h4` |
| `em_út_năm` | `h5` |
| `em_nhỏ_nhất` | `h6` |

#### Văn bản & Layout

| GenZ | HTML |
|------|------|
| `đoạn_tâm_sự` | `p` |
| `chia_ô` | `div` |
| `in_đậm_cho_máu` | `strong` |
| `nhấn_mạnh` | `em` |
| `xuống_dòng_không_hỏi` | `br` |
| `kẻ_ngang_chia_đôi` | `hr` |
| `thanh_trên` | `header` |
| `thanh_dưới` | `footer` |
| `menu_dẫn_đường` | `nav` |
| `nội_dung_chính` | `main` |
| `phần_trang` | `section` |
| `bài_viết` | `article` |
| `lề_bên` | `aside` |

#### Media & Links

| GenZ | HTML |
|------|------|
| `liên_kết` | `a` |
| `ảnh_ngầu` | `img` |
| `video_chill` | `video` |
| `nhạc_nền` | `audio` |
| `canvas_vẽ` | `canvas` |
| `khung_trong_khung` | `iframe` |

#### Form

| GenZ | HTML |
|------|------|
| `mẫu_thu_thập` | `form` |
| `khung_nhập` | `input` |
| `nút_bấm` | `button` |
| `hộp_chọn` | `select` |
| `lựa_chọn` | `option` |
| `vùng_gõ_dài` | `textarea` |
| `nhãn_dán` | `label` |
| `thanh_tiến_trình` | `progress` |

#### Input Types

| GenZ | HTML |
|------|------|
| `gõ_chữ` | `type="text"` |
| `gõ_mật_khẩu` | `type="password"` |
| `gõ_email` | `type="email"` |
| `gõ_số` | `type="number"` |
| `chọn_ngày` | `type="date"` |
| `chọn_màu` | `type="color"` |
| `tải_file` | `type="file"` |
| `check_box` | `type="checkbox"` |
| `radio_chọn_một` | `type="radio"` |
| `nút_submit` | `type="submit"` |
| `ẩn_giấu` | `type="hidden"` |

#### Attributes

| GenZ | HTML |
|------|------|
| `src_link` | `src` |
| `link_dẫn` | `href` |
| `lớp_khác` | `class` |
| `id_cá_nhân` | `id` |
| `loại_gì` | `type` |
| `giá_trị` | `value` |
| `mờ_mờ_gợi_ý` | `placeholder` |
| `bắt_buộc_nhé` | `required` |
| `vô_hiệu_hóa` | `disabled` |
| `tab_mới` | `target="_blank"` |
| `lang_vie` | `lang="vi"` |
| `charset_utf` | `charset="UTF-8"` |
| `tải_lười_biếng` | `loading="lazy"` |

---

### 💅 CSS (`.cagz`)

#### Màu sắc & Nền

| GenZ | CSS |
|------|-----|
| `tông_nền` | `background-color` |
| `ảnh_nền` | `background-image` |
| `màu_chữ` | `color` |
| `trong_suốt` | `opacity` |
| `màu_gradient` | `background: linear-gradient` |
| `mờ_nền` | `backdrop-filter: blur` |

#### Typography

| GenZ | CSS |
|------|-----|
| `phông_bạt` | `font-family` |
| `cỡ_chữ` | `font-size` |
| `độ_dày` | `font-weight` |
| `căn_giữa` | `text-align: center` |
| `căn_trái` | `text-align: left` |
| `chiều_cao_dòng` | `line-height` |
| `cắt_chữ_ba_chấm` | `text-overflow: ellipsis` |

#### Kích thước & Spacing

| GenZ | CSS |
|------|-----|
| `chiều_rộng` | `width` |
| `chiều_cao` | `height` |
| `chiều_rộng_full` | `width: 100%` |
| `full_màn_hình` | `width: 100vw; height: 100vh` |
| `nội_tâm_thầm_kín` | `padding` |
| `khoảng_cách_đôi_ta` | `margin` |
| `căn_giữa_hoàn_hảo` | `margin: 0 auto` |
| `khoảng_cách_ngắn` | `gap` |

#### Border & Shadow

| GenZ | CSS |
|------|-----|
| `khung_hình_phạt` | `border` |
| `bo_góc` | `border-radius` |
| `bo_tròn_hoàn_toàn` | `border-radius: 50%` |
| `đổ_bóng_vào_đời` | `box-shadow` |
| `bóng_nhẹ_nhàng` | `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` |

#### Flexbox

| GenZ | CSS |
|------|-----|
| `linh_hoạt` | `display: flex` |
| `giữa_hoàn_hảo` | `justify-content: center; align-items: center` |
| `cách_đều` | `justify-content: space-between` |
| `chiếm_hết_chỗ` | `flex: 1` |
| `xuống_hàng_khi_hẹp` | `flex-wrap: wrap` |
| `hướng_cột` | `flex-direction: column` |

#### Grid

| GenZ | CSS |
|------|-----|
| `lưới_đẹp` | `display: grid` |
| `cột_grid` | `grid-template-columns` |
| `chia_đều_cột` | `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` |

#### Position

| GenZ | CSS |
|------|-----|
| `lơ_lửng` | `position: absolute` |
| `tương_đối` | `position: relative` |
| `dính_màn_hình` | `position: fixed` |
| `dính_khi_cuộn` | `position: sticky` |
| `che_khuất_ai` | `z-index` |

#### Animation

| GenZ | CSS |
|------|-----|
| `bay_lắc` | `animation` |
| `mượt_mà` | `transition: all 0.3s ease` |
| `biến_đổi` | `transform` |
| `xoay_vòng` | `transform: rotate` |
| `phóng_to_thu_nhỏ` | `transform: scale` |
| `khai_báo_keyframe` | `@keyframes` |

#### Cursor & Interaction

| GenZ | CSS |
|------|-----|
| `chuột_tay` | `cursor: pointer` |
| `chuột_không_được` | `cursor: not-allowed` |
| `không_chọn_được` | `user-select: none` |
| `không_click_được` | `pointer-events: none` |
| `scroll_mượt` | `scroll-behavior: smooth` |
| `overflow_ẩn` | `overflow: hidden` |

#### Responsive

| GenZ | CSS |
|------|-----|
| `khi_di_động` | `@media (max-width: 768px)` |
| `khi_tablet` | `@media (min-width: 768px) and (max-width: 1024px)` |
| `khi_desktop` | `@media (min-width: 1024px)` |
| `khi_tối` | `@media (prefers-color-scheme: dark)` |
| `khi_sáng` | `@media (prefers-color-scheme: light)` |

#### Pseudo-classes

| GenZ | CSS |
|------|-----|
| `khi_rê_chuột` | `:hover` |
| `khi_nhấn` | `:active` |
| `khi_focus` | `:focus` |
| `đứa_đầu` | `:first-child` |
| `đứa_cuối` | `:last-child` |
| `trước_nội_dung` | `::before` |
| `sau_nội_dung` | `::after` |

---

## 🧑‍💻 Demo thực tế

### Express server viết bằng `.agz`

```js
triệu_hồi('express') chốt_kèo express
chốt_kèo app = express()
chốt_kèo PORT = 3000

app.dẫn_mối(express.json())

app.đớp('/', (hỏi_thăm, trả_lời_tin_nhắn) => {
    trả_lời_tin_nhắn.phọt_json_ngắn({ message: 'Chào CEO! 🌙' })
})

app.đớp('/users/:id', bất_biến (hỏi_thăm, trả_lời_tin_nhắn) => {
    bắt_thằng_vấp_cỏ {
        chốt_kèo id   = hỏi_thăm.tham_số_huyền_bí.id
        chốt_kèo data = đợi_tí đi_chợ(`https://api.example.com/users/${id}`)
        chốt_kèo user = đợi_tí data.phọt_json_ngắn()
        trả_lời_tin_nhắn.200_oke().phọt_json_ngắn(user)
    } đm_lỗi_kìa (err) {
        la_làng_cảnh_báo('Lỗi:', err.message)
        trả_lời_tin_nhắn.ăn_hại().phọt_json_ngắn({ error: 'nổ_vũ_trụ' })
    }
})

app.nghe_ngóng(PORT, () => {
    la_làng(`🚀 Server đang chạy tại cổng_trục ${PORT}`)
})
```

Chạy bằng:

```bash
amoon run server.agz
```

### Trang HTML viết bằng `.hagz`

```html
khai_sinh
<dân_chơi lang_vie>
<não_to>
  <thông_tin_ẩn charset_utf>
  <tiêu_đề_lớn>AMoon Demo</tiêu_đề_lớn>
  <dẫn_đường_css link_dẫn="style.css">
</não_to>
<thân_xác>
  <thanh_trên>
    <đại_ca_chữ>Chào mừng đến với AMoon 🌙</đại_ca_chữ>
  </thanh_trên>
  <nội_dung_chính>
    <đoạn_tâm_sự>Code GenZ, chạy như thật.</đoạn_tâm_sự>
    <nút_bấm id_cá_nhân="btn">Click đi</nút_bấm>
  </nội_dung_chính>
</thân_xác>
</dân_chơi>
```

### Style viết bằng `.cagz`

```css
thân_xác {
    tông_nền: đen;
    màu_chữ: trắng;
    phông_bạt: 'Inter', sans-serif;
    khoảng_cách_đôi_ta: 0;
    nội_tâm_thầm_kín: 0;
}

.card {
    linh_hoạt;
    giữa_hoàn_hảo;
    hướng_cột;
    bo_góc: 12px;
    đổ_bóng_vào_đời: 0 4px 20px rgba(0,0,0,0.3);
    mượt_mà;
}

.card:khi_rê_chuột {
    phóng_to_thu_nhỏ(1.03);
}

khi_di_động {
    .card { chiều_rộng_full; }
}
```

---

## 🗂️ Cấu trúc dự án

```
amoon-js/
├── bin/
│   └── amoon.js              # CLI entry point
├── src/
│   ├── translator.js         # Engine dịch chính
│   └── dictionaries/
│       ├── js.js             # 441 thuật ngữ JS
│       ├── html.js           # 170 thuật ngữ HTML
│       └── css.js            # 263 thuật ngữ CSS
├── package.json
└── README.md
```

File GenZ của mày không bị đụng tới. Kết quả dịch được lưu vào `.cache_amoon/`.

---

## 🤝 Đóng góp

Thấy thiếu từ nào xịn? Muốn thêm category mới (TypeScript? SQL? Bash)?

1. Fork repo về
2. Thêm vào file dict tương ứng trong `src/dictionaries/`
3. Tạo Pull Request

Quy tắc đặt tên từ GenZ:
- Dùng dấu `_` thay khoảng trắng
- Phải là tiếng Việt hoặc từ lóng có nghĩa
- Càng hài càng tốt, càng toxic thì phải đúng context

Quăng Issue lên GitHub nếu có bug hoặc ý tưởng hay. Cùng nhau xây đế chế lập trình GenZ lớn nhất vũ trụ! 🚀

---

<div align="center">
<b>Made with ❤️ by CEO Công & AMoon Team</b>
<br/>
<i>"Code bằng niềm tin, chạy bằng nhân phẩm!"</i>
</div>
