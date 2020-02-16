const urlUtil = require("./urls");

describe("This is the url provider to retrieve stock historical prices", () => {
  it("should return url for APPL stock", () => {
    const url = urlUtil.getHistoricPriceUrl("AAPL");
    expect(url).toBe(
      "https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line"
    );
  });

  it("should throw error because Symbol is not passed", () => {
    expect(urlUtil.getHistoricPriceUrl).toThrow();
  });
});
