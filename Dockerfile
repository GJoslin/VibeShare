# Use official Node.js Alpine image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port your app listens on
EXPOSE 8181

# Start the application
CMD ["node", "index.js"]
