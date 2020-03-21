docker build -t stocky-calculator-service:dev ./calculator-service
docker build -t stocky-pricer-service:dev ./pricer-service
docker build -f ./client-service/Dockerfile.dev -t stocky-client-service:dev ./client-service
docker build -t stocky-orchestrator-service:dev ./orchestrator-service
docker build -t stocky-mongo-service:dev ./mongo-service
docker build -t stocky-redis-service:dev ./redis-service