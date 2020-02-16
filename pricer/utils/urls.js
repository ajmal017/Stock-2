exports.getHistoricPriceUrl = symbol => {
  if (!symbol) throw new Error("Symbol not passed");
  else
    return `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?serietype=line`;
};
