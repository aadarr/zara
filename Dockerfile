# Use the official Node.js image as a base
FROM node:latest

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Install Python dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
