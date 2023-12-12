
FROM node:20.5.1


WORKDIR /app


COPY package*.json ./


RUN apt-get update && apt-get install -y npm
RUN npm install


COPY . .


EXPOSE 3000

CMD ["npm", "start"]

