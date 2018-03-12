FROM node:latest

WORKDIR /usr/src/app

COPY package.json package.json
RUN npm i

COPY server.js server.js

EXPOSE 80

ENTRYPOINT [ "npm", "start" ]
