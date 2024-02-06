FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:latest

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]