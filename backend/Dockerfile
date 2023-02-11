FROM node:19.6.0-slim

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 3333

USER node

CMD ["npm", "start"]
