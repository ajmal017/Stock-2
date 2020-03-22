FROM node:alpine as builder

WORKDIR /app
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install
COPY . .
RUN npm run build


FROM nginx:1.17.4-alpine
EXPOSE 3000
COPY --from=builder /app/build/ /usr/share/nginx/html
COPY ./nginx/nginx-dev.conf /etc/nginx/conf.d/default.conf
