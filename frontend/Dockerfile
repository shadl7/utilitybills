FROM node:22-alpine

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]