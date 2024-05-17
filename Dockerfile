# Use the official Node.js image as a base
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]