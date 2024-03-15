FROM node:21-alpine
WORKDIR /my-cloude-storage-server
ADD package.json package.json
RUN npm install --legacy-peer-deps
ADD . .
RUN npm run build
CMD ["node", "./dist/main.js"]