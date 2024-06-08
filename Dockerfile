#using the official node base image
FROM node:14

#setting the working dir inside the container
WORKDIR /usr/src/app

#Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

#copy the rest of the application
COPY . .

#expose the port the application runs on
EXPOSE 3000

#command to run the application
CMD ["node","app.js"]