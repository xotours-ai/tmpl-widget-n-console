FROM node:8-alpine
ARG REACT_APP_WEB_API_SERVER


WORKDIR /app
RUN yarn global add create-react-app serve

COPY package.json .
RUN yarn install

ENV REACT_APP_WEB_API_SERVER "$REACT_APP_WEB_API_SERVER"
COPY . .
RUN yarn run build-css && yarn run build

CMD serve -s build -c 0

