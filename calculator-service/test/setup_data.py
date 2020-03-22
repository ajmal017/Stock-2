import json
import os
import pandas as pd

base_dir = os.path.dirname(__file__)


def setup_data():
    historicData = []
    files = ['GS.json', 'BAC.json']
    for f in files:
        path = os.path.join(base_dir, f)
        with open(path) as json_file:
            historicData.append(json.load(json_file))
    return {"historicData": historicData}


def setup_df():
    path = os.path.join(base_dir, 'GS.json')
    data = {}
    with open(path) as json_file:
        data = json.load(json_file)
    df = pd.DataFrame.from_dict(data['history'], orient='index')
    df = df[['close']]
    df = df.rename(columns={'close': 'GS'})
    df = df.astype('float')
    df.index = pd.to_datetime(df.index)
    return df
