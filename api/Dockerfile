FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 1234
CMD [ "npm", "start" ]