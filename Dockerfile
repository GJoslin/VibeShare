# ------------------------------
# Stage 1: Build
# ------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the standalone Next.js app
RUN npm run build

# ------------------------------
# Stage 2: Production
# ------------------------------
FROM node:20-alpine

WORKDIR /app

# Copy the standalone build output from builder stage
COPY --from=builder /app/.next/standalone ./

# Expose the port the app listens on
EXPOSE 8181

# Start the standalone server
CMD ["node", "server.js"]
