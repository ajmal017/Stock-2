import json
import os
import pandas as pd

base_dir = os.path.dirname(__file__)


def setup_data_multiple_tickers():
    historicData = []
    files = ['GS.json', 'BAC.json']
    for f in files:
        path = os.path.join(base_dir, f)
        with open(path) as json_file:
            historicData.append(json.load(json_file))
    return {"historicData": historicData}

def setup_data_one_ticker():
    historicData = []
    files = ['GS.json']
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


def setup_df_with_GSPC():
    files = ['GS.json', 'GSPC.json']
    dataframes = []
    for file in files:
        path = os.path.join(base_dir,file)
        data = {}
        with open(path) as json_file:
            data = json.load(json_file)
        df = pd.DataFrame.from_dict(data['history'], orient='index')
        print(df.head(3))
        df = df[['close']]
        df = df.rename(columns={'close': data['name']})
        df = df.astype('float')
        df.index = pd.to_datetime(df.index)
        dataframes.append(df)
    joined = pd.concat(dataframes, axis=1).dropna(how='any')
    return joined
