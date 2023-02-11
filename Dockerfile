FROM node:19.6.0-slim

WORKDIR /app

COPY . /app/

RUN npm install --no-audit
RUN cd ./backend && npm install

EXPOSE 3333
EXPOSE 3000

USER node

CMD ["npm", "start"]