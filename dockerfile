FROM node:14

# Cài đặt OpenSSL
RUN apt-get update && apt-get install -y openssl

# Cài đặt các gói phụ thuộc cho dự án của bạn
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Khởi động ứng dụng của bạn
CMD ["npm", "start"]
