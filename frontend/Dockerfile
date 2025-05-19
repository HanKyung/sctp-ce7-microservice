FROM node:23.11.1-alpine3.21

# working directory in the container
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

