FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./

# COPY package.json /usr/src/app
# COPY package-lock.json /usr/src/app

RUN npm install --quiet
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]