# Stock and Portfolios

Users can select stocks and optimise portfolios through the application of Modern Portfolio Theory (MPT) and Capital Asset Pricing Model (CAPM). The application automatically calculates the portfolio returns and risks and plots the results in the charts.

The application is available at www.romoclub.com and it uses a React web client, microservices developed with Express (Nodejs) and python (FastAPI), nginx as a reverse proxy and Redis as a caching layer. The services are deployed in Docker containers in Elastic Beanstalk through Travis CI/CD pipeline.

## Features:

- Calculation of the risk and return of an individual stock.
- Calculation of the portfolio risk and return.
- Calculation of the efficient frontier

## Getting Started

You can clone this project and run docker-compose up.
You will need docker and docker-compose to run this application.

## Running the tests

You can run the tests of each service through "npm run test:local".

### Break down of testing

- Pytest & Jest: Used for unit testing with mocks for external dependencies.
- Supertest: Used for integration testing and API testing that includes external dependencies.

### Services Description

<!-- - Identity: It manages the credentials of the customers through JWT tokens. Users can login with google credentials. -->
<!-- - Orchestrator: It orchestrates fetching the stocks data and calculations -->
- Calculator: It runs the financial calculations of the stocks and portfolios
- Pricer: It retrieves the historical data of the stocks
- Orchestrator: It is the gateway to coordinate and aggregate other APIs.
- Client: This is the front end website to interact with all the backend services.
- Redis: Caching layer of historical stock data. The data is purged at the end of the day.
- Ngingx: It is a reverse proxy that directs the requests to the Client and Orchestrator.

## Deployment

This application uses Travis CI to run continuous delivery and integration and the services are deployed in docker containers Elastic Beanstalk.
## Built With

- [Nodejs-Express](https://expressjs.com/) - Javascript microservice framework.
- [FastAPI](https://fastapi.tiangolo.com/) - Python microservice framework.
- [React](https://reactjs.org/) - User Interface framework.
- [Nginx](https://www.nginx.com/) - Reverse Proxy and static asset web server.
- [Redis](https://redis.io/) - In memory store database.
- [Docker](https://www.docker.com/) - Used to containerize the services.

## Authors

- **Ignacio Vidal**
