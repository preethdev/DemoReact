
# build environment


FROM node:16.0.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts -g --silent
COPY . ./
RUN npm install
RUN npm run build
RUN npm install -g serve
RUN serve -s build
EXPOSE 3000

# production environment

