def try_except(func):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as error:
            raise RuntimeError(f'There was an error {error} in {func.__name__}')
    return wrapper