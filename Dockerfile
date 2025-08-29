# Use official Node.js Alpine image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

<<<<<<< HEAD
# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
=======
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
>>>>>>> b8e76b73b0298dfb6ee0c2e40724bda9f9b8c028
COPY . .

# Expose port your app listens on
EXPOSE 8181

<<<<<<< HEAD
# Start the application
=======
# Start the app
>>>>>>> b8e76b73b0298dfb6ee0c2e40724bda9f9b8c028
CMD ["node", "index.js"]
