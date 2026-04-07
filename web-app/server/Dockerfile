# Base image
FROM node:18

# Thư mục làm việc trong container
WORKDIR /app

# Copy file package trước để tối ưu cache
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code server
COPY . .

# Mở port
EXPOSE 5000

# Chạy server
CMD ["node", "server.js"]
