# development image stage
FROM node:10.14-alpine as dev

USER node

ENV HOME /home/node
ENV CODE $HOME/code

RUN mkdir -p $CODE

WORKDIR $CODE

CMD ["yarn", "start:dev"]

# production image stage
FROM node:10.14-alpine as prd

USER node

ENV HOME /home/node
ENV CODE $HOME/code

RUN mkdir -p $CODE

WORKDIR $CODE

COPY package.json yarn.lock $CODE/

RUN \
  NODE_ENV=production yarn --production && \
  yarn cache clean

COPY . $CODE

CMD ["yarn", "start"]
