FROM node:alpine AS builder
COPY package.json .
RUN yarn
COPY . .
RUN yarn build
FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 3000