FROM node:18-alpine
WORKDIR /client

COPY ./src/client .

RUN npm install
RUN npm run build

WORKDIR /app

COPY ./src/server .

RUN npm install
RUN npm install -g sequelize-cli
RUN npm install --save mysql2

CMD ["node", "./server.js"]
