# Stock and Portfolios

Users can build portfolios of stocks and compare the return to market indexes. The application automatically calculates the annual return and risk of each individual stock and portfolios and plots the results in charts.

The application uses a React web client, various microservices developed with Express (Nodejs) and python (Flask), nginx as a reverse proxy and MongoDB as the persistent layer. The services are deployed Docker containers, orchestrated with Kubernetes and hosted in Google Cloud.

## Features:

- Calculation of the risk and return of an individual stock.
- Comparison of the annual return between an individual stock and a market Index.
- Comparison of the risk and return of multiple stocks.
- Calculation of the portfolio risk and return.
- Comparison of the annual return between the porfolio and a market Index.

## Getting Started

You can clone this project and run docker-compose up.
You will need docker and docker-compose to run this application.

## Running the tests

You can run the tests of each service through "npm run test:local".

### Break down of testing

- Jest: Used for unit testing with mocks for external dependencies.
- Supertest: Used for integration testing and API testing that includes external dependencies.

### Services Description

- Identity: It manages the credentials of the customers through JWT tokens. Users can login with google credentials.
- Orchestrator: It orchestrates fetching the stocks data and calculations
- Calculator: It runs the financial calculatios of the stocks and portfolios
- Pricer: It retrieves the stocks data
- Client: This is the front end website to interact with all the backend services.
- Ngingx: It is a reverse proxy that directs the requests to the client or the backend services.

## Deployment

This application uses Travis CI to run continuous delivery and integration and the services are deployed in docker containers in a Kubernetes cluster in Google Cloud.

## Built With

- [Nodejs-Express](https://expressjs.com/) - Microservice framework.
- [React](https://reactjs.org/) - User Interface framework.
- [Docker](https://www.docker.com/) - Used to containerize the services.
- [Nginx](https://www.nginx.com/) - Reverse Proxy and static asset web server.
- [MongoDB](https://www.mongodb.com/) - Database persistence layer

## Authors

- **Ignacio Vidal**
