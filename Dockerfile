FROM node:14.15.1-slim

WORKDIR /app
COPY package*.json .
RUN yarn add package.json --silent

WORKDIR /app/src
COPY ./src .

CMD yarn run dev
