  FROM node:14.17.1-alpine3.13
  WORKDIR /var/projects/node-app 
  COPY . /var/projects/node-app
  RUN npm -g install npm@6.14.14
  RUN npm install
  EXPOSE 3001 
  CMD ["node", "index.js"]
# docker run -dp 3001:3001 node-ga-14v1 --network=bridge