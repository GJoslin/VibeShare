# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: production
FROM node:20-alpine
WORKDIR /app

# Copy only the standalone build output
COPY --from=builder /app/.next/standalone ./

# Expose the port
EXPOSE 8181

# Start the standalone server
CMD ["node", "server.js"]
