FROM node:14

# Cài đặt OpenSSL
RUN apt-get update && apt-get install -y openssl

# Cài đặt các gói phụ thuộc cho dự án của bạn
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Xác định cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Khởi động ứng dụng
CMD ["node", "index.js"]
