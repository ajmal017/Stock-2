FROM python:3.7

WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt .
RUN pip install -r /app/requirements.txt 

COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

