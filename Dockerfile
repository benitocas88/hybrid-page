FROM node:12.18.3-slim

WORKDIR /www/app
COPY package.json .
RUN yarn install
WORKDIR /www/app/src
ADD ./src ./src
