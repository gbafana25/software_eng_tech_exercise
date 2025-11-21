FROM node:18.18.2-alpine3.18

WORKDIR /dist/src/app
RUN npm cache clean --force

COPY . .

RUN npm install
EXPOSE 4200
CMD npm start

