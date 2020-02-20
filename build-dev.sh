docker build -t stocky-calculator:dev ./calculator
docker build -t stocky-pricer:dev ./pricer
docker build -t stocky-gateway:dev ./gateway
docker build -f ./client/Dockerfile.dev -t stocky-client:dev ./client