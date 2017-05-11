# Boilerplate React-Docker-webpack2
This repository shows installing basic features for webpack 2 along with react and running application on Docker

To run application on docker, you need to have docker installed on local machine and just run the command from root directory
```bash
    docker-compose up
```
Then you can access the application on browser using 
```bash
    http://localhost:8080 
```

To run the application locally without docker, you need to start webpack-dev-server and express server on different terminals using below commands

* For starting webpack development server
```bash
    npm run dev
```
* For Production
```bash
    npm run prod
```

* Starting the express server
```bash
    npm run serve
```
