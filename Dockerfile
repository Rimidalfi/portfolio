FROM node:22-alpine AS react

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS nginx

COPY --from=react /app/dist /usr/share/nginx/html

COPY envnginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]