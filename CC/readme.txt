Docker-izing a NodeJS ExpressJS API

1. Create Dockerfile
example:

FROM node:16
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY . /app
CMD ["npm", "start"]
--------------------------------------------
2. Build Docker
example:

docker build -t <name> .  
^^^^^^^^^^^^^^^^^^^^^^
docker build -t test-docker .
--------------------------------------------
3. Run Docker
example:

docker run -it -p <port> <name>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
docker run -it -p 49160:8080 test-docker

OR

docker run -d -p 49160:8080 test-docker
--------------------------------------------
4. Docker ps (list)
docker ps





-----------------------------------------

docker tag test-docker gcr.io/weighty-media-343716/test-docker:v1

docker push gcr.io/weighty-media-343716/test-docker:v1