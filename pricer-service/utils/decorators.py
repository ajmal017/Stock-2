import logging
logger = logging.getLogger(__name__)


def try_except(fun):
    def wrapper(*args, **kwargs):
        try:
            return fun(*args, **kwargs)
        except Exception as error:
            error = RuntimeError(f'There was an error => {error} in {func.__name__}')
            error['code'] = 500
            logger.error(err)
            raise error
    return wrapper