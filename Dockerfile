FROM node:16-alpine as base 

WORKDIR /src 

COPY package*.json / 

EXPOSE 5050

FROM base as production 

ENV NODE_ENV=production 

RUN npm ci

COPY . /

CMD ["node", "server.js"]

FROM base as dev

ENV NODE_ENV=development 

RUN npm install -g nodemon && npm install

COPY . /

CMD ["nodemon", "server.js"]