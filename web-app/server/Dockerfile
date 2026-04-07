# Base image
FROM node:18

# Working folder in container 
WORKDIR /app

# Copy file package 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy entire source code server
COPY . .

# Open port
EXPOSE 5000

# Run server
CMD ["node", "server.js"]
