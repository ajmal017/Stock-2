docker build -t vidalignacio/stocky-calculator-service:latest ./calculator-service
docker build -f ./client-service/Dockerfile.dev -t vidalignacio/stocky-client-service:latest ./client-service

docker login -u vidalignacio -u Lirios89@

docker push vidalignacio/stocky-calculator-service:latest
docker push vidalignacio/stocky-client-service:latest
