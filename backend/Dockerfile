
FROM node:20.5.1


WORKDIR /app


COPY package*.json ./


RUN npm install
RUN npm install --global nodemon

COPY . .


EXPOSE 5000

CMD ["nodemon", "index.js"]
 
