## 🧩 Giới thiệu
**S3-MRS** là một ứng dụng web xây dựng bằng **React** và **Vite**, kết hợp với **JSON Server** để mô phỏng backend.  
Ứng dụng hỗ trợ sinh viên đăng ký phòng và quản trị viên phê duyệt yêu cầu đặt phòng, thích hợp cho mục tiêu học tập và thử nghiệm.
---
## 🛠️ Công nghệ sử dụng

- ⚛️ React + Vite  
- 📦 JSON Server (RESTful API giả lập)  
- 🧑‍🎨 HTML / CSS  
- 📁 Local file (`db.json`) để lưu trữ dữ liệu mô phỏng  
---
## ⚙️ Yêu cầu hệ thống
- Node.js >= 14  
- npm  
- Trình duyệt hiện đại (Chrome, Edge, Firefox,...)  
---
## 🚀 Cách chạy dự án
Đầu tiên, bạn clone dự án về và cài đặt thư viện:
```bash
git clone https://github.com/ten-cua-ban/S3-MRS.git
cd S3-MRS
npm install
```
Sau đó, cài đặt JSON Server toàn cục (nếu chưa có):
```bash
npm install -g json-server
```
Tiếp theo, bạn mở **hai tab terminal**:
- Ở tab đầu tiên, chạy JSON Server để mô phỏng API bằng file `db.json` có sẵn trong thư mục gốc:
```bash
json-server --watch db.json --port 3001
```
- Ở tab thứ hai, chạy ứng dụng React:
```bash
npm run dev
``
Sau khi cả hai đã chạy, bạn có thể truy cập:
- Giao diện web tại: [http://localhost:5173](http://localhost:5173)  
- API giả lập tại: [http://localhost:3001](http://localhost:3001)
---
## 📁 Cấu trúc thư mục

```plaintext
S3-MRS/
├── src/
│   ├── data/            # Chứa các dữ liệu giả lập và tài nguyên
│   │   ├── db.json      # Dữ liệu giả lập cho JSON Server
│   │   └── user.json    # Dữ liệu người dùng (nếu có)
│   ├── assets/          # Các tài nguyên dùng chung (hình ảnh, icon,...)
│   ├── components/      # Các thành phần giao diện dùng chung (button, input, form,...)
│   ├── pages/           # Các trang chính: HomePage, AdminPage, LoginPage, StudentPage,...
│   │   ├── AdminPage.jsx    # Trang quản trị viên
│   │   ├── HomePage.jsx     # Trang chủ
│   │   ├── LoginPage.jsx    # Trang đăng nhập
│   │   ├── StudentPage.jsx  # Trang của sinh viên
│   ├── App.jsx          # Gốc ứng dụng React
│   └── main.jsx         # Điểm khởi động ứng dụng
├── vite.config.js       # Cấu hình cho Vite
├── package.json         # Thông tin thư viện và script
└── README.md            # Hướng dẫn sử dụng (file này)
## 🧪 Một số endpoint JSON Server mẫu
```http
GET     /users         → Danh sách người dùng
GET     /rooms         → Danh sách phòng
GET     /bookings      → Danh sách yêu cầu đặt phòng
POST    /bookings      → Tạo yêu cầu mới
PATCH   /rooms/:id     → Cập nhật trạng thái phòng
```
---

## 👩‍💻 Tác giả

- **Họ tên**: 
    - Trịnh Quốc Bảo
    - Nguyễn Minh Thành
    - Duơng Tú Tú
- **GitHub**: [(https://github.com/Bao-Trinh-Quoc/M3RS.git)](https://github.com/Bao-Trinh-Quoc/M3RS.git)

---