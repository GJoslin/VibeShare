# Use Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the standalone app
RUN npm run build

# Expose the port your app listens on
EXPOSE 8181

# Start the standalone server
CMD ["npm", "run", "start:standalone"]
