FROM node:alpine

ENV NODE_ENV=development

WORKDIR /usr/src/bot

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

CMD yarn dev
