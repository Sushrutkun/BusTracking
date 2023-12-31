# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Build the application
RUN npm run build


# Expose port 3000 for the API server
EXPOSE 3000

# Start the API server
CMD [ "npm", "start" ]

# Set environment variables
