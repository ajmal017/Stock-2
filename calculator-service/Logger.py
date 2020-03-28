
import logging

def getLogger(__name__):
    logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', datefmt='%d/%m/%Y %I:%M:%S %p')
    logger = logging.getLogger(__name__)
    return logger