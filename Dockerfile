FROM node:10.15.3
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]