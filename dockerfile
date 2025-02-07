FROM node:14

# Cài đặt OpenSSL
RUN apt-get update && apt-get install -y openssl

# Tạo thư mục làm việc trong container
WORKDIR /app

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các gói phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xác định cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Khởi động ứng dụng
CMD ["node", "index.js"]
