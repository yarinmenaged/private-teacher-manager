FROM node:18-alpine
WORKDIR /client

COPY ./client .

RUN npm install
RUN npm run build

WORKDIR /app

COPY ./server .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm install --save mysql2

WORKDIR /app/db

RUN npx sequelize-cli db:seed:all

WORKDIR /app

CMD ["node", "./server.js"]
