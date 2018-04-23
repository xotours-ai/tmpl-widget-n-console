FROM python:3-alpine3.6

RUN apk update \
	&& apk add curl libxml2-dev libxslt-dev libffi-dev gcc musl-dev libgcc openssl-dev git

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY crontab /var/spool/cron/crontabs/root
COPY . .


CMD crond && python run.py
