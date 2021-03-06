FROM node:12.20.0-buster-slim as app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
COPY . /usr/src/mymaven
WORKDIR /usr/src/mymaven
RUN cnpm i && npm run build

FROM nginx:alpine
ENV PROXY_API http://coframe.rio.chenmin.org
COPY --from=app /usr/src/mymaven/dist /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/
