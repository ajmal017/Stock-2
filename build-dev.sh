docker build -t stocky-calculator-service:dev ./calculator-service
docker build -f ./client-service/Dockerfile.dev -t stocky-client-service:dev ./client-service