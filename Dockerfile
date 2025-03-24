FROM node:18.18.2-alpine

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm rum build

EXPOSE 4173

CMD ["npm", "run", "preview"]