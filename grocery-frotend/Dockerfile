FROM node:alpine AS build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

FROM nginx:alpine
# folder path to compiled files
COPY --from=build /usr/src/app/dist/grocery-frotend/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 8080