FROM node:10.14-alpine

USER node

ENV HOME /home/node
ENV CODE $HOME/code

RUN mkdir -p $CODE

WORKDIR $CODE

CMD ["yarn", "start"]
