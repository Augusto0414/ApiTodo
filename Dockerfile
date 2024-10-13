FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM node:20 as production

WORKDIR /app

COPY --from=build /app .
COPY --from=build /app/dist ./dist

ENV PORT=${PORT}
ENV USER=${USER}
ENV HOST=${HOST}
ENV DATABASE=${DATABASE}
ENV PASSWORD=${PASSWORD}
ENV PORT_DATABASE=${PORT_DATABASE}

EXPOSE 3000

CMD [ "npm", "start" ]
