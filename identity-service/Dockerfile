FROM node:alpine

RUN apk --no-cache add --virtual builds-deps build-base python

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

COPY . . 
RUN apk del builds-deps

CMD ["node","server"]
