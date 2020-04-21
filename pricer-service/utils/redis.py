import os
import redis
import logging
import json
from datetime import datetime, timedelta

redis_host = os.environ.get('REDIS_SERVICE', 'redis')
redis_port = os.environ.get('REDIS_PORT', 6379)

logger = logging.getLogger(__name__)


class Redis:
    def __init__(self):
        self.client = self.setup_connection()

    def setup_connection(self):
        try:
            logger.info('starting connection between Pricer and Redis')
            redis_client = redis.Redis(host=redis_host, port=redis_port)
            logger.info('connection established between Pricer and Redis Client')
            return redis_client
        except Exception as err:
            logger.info('connection between Pricer and Redis failed', err)
            raise err


    def get_data(self, key):
        try:
            logger.info(f'requesting data from redis for {key}')
            data = self.client.get(str(key))
            logger.info(f'data requested from redis for {key}, {data}')
            return data if data is not None else False
        except Exception as err:
            logger.error(f'error when retrieving data from Redis {err}')
            raise err

    def set_data(self, key, value):
        try:
            logger.info(f'setting data for {key}')
            expiration = self.time_expiration()
            data = json.dumps(value)
            self.client.set('key','test' )
            # self.client.expire(key, expiration)
            logger.info(f'data set in redis for {key}')
        except Exception as err:
            logger.error(f'error when setting data in Redis {err}')
            raise err

    def time_expiration(self):
        """Get the number of seconds until midnight."""
        logger.info('calculating expirattion for')
        tomorrow = datetime.now() + timedelta(1)
        midnight = datetime(year=tomorrow.year, month=tomorrow.month,
                            day=tomorrow.day, hour=0, minute=0, second=0)
        delta =  (midnight - datetime.now())
        print(delta, delta.total_seconds(), int(delta.total_seconds()))
        return int(delta.total_seconds())



