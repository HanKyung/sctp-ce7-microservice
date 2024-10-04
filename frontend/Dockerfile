FROM node:alpine

# working directory in the container
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

