FROM python:3.7

WORKDIR /app
EXPOSE 80

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .
RUN pip install -r /app/requirements.txt 

# RUN pip install fastapi uvicorn numpy pandas requests

# RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

# FROM python:3.8.1-buster

# # set work directory
# WORKDIR /app

# # set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# EXPOSE 80

# # copy requirements file
# COPY ./requirements.txt .

# # install dependencies
# # RUN set -eux \
# #     && apk add --no-cache --virtual .build-deps build-base \
# #     libressl-dev libffi-dev gcc musl-dev python3-dev \
# #     && pip install --upgrade pip setuptools wheel \
# #     && pip install -r /app/requirements.txt \
# #     && rm -rf /root/.cache/pip



# RUN pip install -r /app/requirements.txt 
# # copy project
# COPY . .
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
