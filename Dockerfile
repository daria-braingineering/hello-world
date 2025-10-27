FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG NEXT_PUBLIC_NAME
ENV NEXT_PUBLIC_NAME=$NEXT_PUBLIC_NAME

RUN npm run build

EXPOSE 3006

CMD ["npm", "start"]