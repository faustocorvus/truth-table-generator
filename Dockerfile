FROM node:latest

# Create app directory
WORKDIR /app
COPY ./ /app/

# Install app dependencies
RUN npm install
RUN npm run build:ssr

CMD [ "node", "dist/truth-table/server/main.js" ]