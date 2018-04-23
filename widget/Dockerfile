FROM node:8-alpine

WORKDIR /app
RUN yarn global add create-react-app serve

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

CMD serve -s build -c 1800000
