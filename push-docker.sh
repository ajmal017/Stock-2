docker build -t vidalignacio/stock-calculator-service:latest -t vidalignacio/stock-calculator-service:$(git rev-parse HEAD) ./calculator-service
docker build -t vidalignacio/stock-client-service:latest -t vidalignacio/stock-client-service:$(git rev-parse HEAD) ./client-service
docker build -t vidalignacio/stock-orchestrator-service:latest -t vidalignacio/stock-orchestrator-service:$(git rev-parse HEAD) ./orchestrator-service
docker build -t vidalignacio/stock-redis-service:latest -t vidalignacio/stock-redis-service:$(git rev-parse HEAD) ./redis-service
docker build -t vidalignacio/stock-pricer-service:latest -t vidalignacio/stock-pricer-service:$(git rev-parse HEAD) ./pricer-service

docker push vidalignacio/stock-calculator-service:latest
docker push vidalignacio/stock-client-service:latest
docker push vidalignacio/stock-pricer-service:latest
docker push vidalignacio/stock-orchestrator-service:latest
docker push vidalignacio/stock-redis-service:latest

docker push vidalignacio/stock-calculator-service:$(git rev-parse HEAD)
docker push vidalignacio/stock-client-service:$(git rev-parse HEAD)
docker push vidalignacio/stock-pricer-service:$(git rev-parse HEAD)
docker push vidalignacio/stock-orchestrator-service:$(git rev-parse HEAD)
docker push vidalignacio/stock-redis-service:$(git rev-parse HEAD)