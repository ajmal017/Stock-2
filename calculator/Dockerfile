FROM node:alpine

WORKDIR /app
RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD [ "app.py" ] 
