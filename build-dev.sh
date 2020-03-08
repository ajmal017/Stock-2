docker build -t stocky-calculator:dev ./calculator-service
docker build -f ./client-service/Dockerfile.dev -t stocky-client:dev ./client-service