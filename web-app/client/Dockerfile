# Use Nginx for static web
FROM nginx:alpine

# remove default config (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy file HTML, JS into nginx
COPY . /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf 

# Open port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
