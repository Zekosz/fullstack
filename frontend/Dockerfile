FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
RUN sed -i 's/listen\(.*\)80;/listen\18080;/' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
