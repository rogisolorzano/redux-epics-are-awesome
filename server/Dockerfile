FROM node:12.20-alpine as dev
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:12.20-alpine as prod
WORKDIR /app
COPY --from=dev /app ./
CMD ["yarn", "start:prod"]
