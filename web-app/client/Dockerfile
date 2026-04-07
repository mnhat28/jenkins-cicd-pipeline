# Dùng nginx để serve web tĩnh
FROM nginx:alpine

# Xóa config mặc định (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy toàn bộ file HTML, JS vào nginx
COPY . /usr/share/nginx/html

# Mở port 80
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]
