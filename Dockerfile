# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the app
COPY . .

# Expose port the app will run on
EXPOSE 3000

# Start the Next.js standalone server
CMD ["node", ".next/standalone/server.js"]
