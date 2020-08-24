FROM node:14-slim
ARG env=production
ENV NODE_ENV env
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
CMD [ "npm", "start" ]
