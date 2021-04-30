FROM node:12.20.0-buster-slim as app
COPY . /usr/src/mymaven
WORKDIR /usr/src/mymaven
RUN rm -rf node_modules package-lock.json
RUN npm i && npm run build

FROM nginx:alpine
ENV PROXY_API http://coframe.rio.chenmin.org
COPY --from=app /usr/src/mymaven/dist /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/
