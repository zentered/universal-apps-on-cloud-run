FROM node:14-slim
WORKDIR /usr/src/app
ARG env=production
ARG _API_URL

ENV PORT=$port
ENV HOST=0.0.0.0
ENV NODE_ENV=$env
ENV API_URL=${_API_URL}
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=$port

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

CMD [ "npm", "run", "start" ]
