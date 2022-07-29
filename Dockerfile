FROM node:lts-alpine3.15

# Create app directory
WORKDIR /app
COPY ./ /app/

# Install app dependencies
RUN npm install
RUN npm run build:ssr

CMD [ "node", "dist/truth-table/server/main.js" ]