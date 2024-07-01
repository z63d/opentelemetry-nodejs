FROM node:20-slim
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD ["npx", "ts-node", "--require", "./instrumentation.ts", "app.ts"]
