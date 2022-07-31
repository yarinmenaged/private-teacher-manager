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

RUN npx sequelize-cli db:sedd:all

CMD ["node", "./server.js"]
