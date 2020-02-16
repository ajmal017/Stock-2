const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);
const utils = require("../utils/urls");
const { HISTORICAL_PRICE } = require("../urls");

const CONSTANTS = {
  SYMBOL: "AAPL"
};

describe("obtain stock price endpoint", () => {
  it("should return 200 because stock price is retrived successfully", async () => {
    const res = await request.get(`${HISTORICAL_PRICE}/${CONSTANTS.SYMBOL}`);
    expect(res.statusCode).toBe(200);
  });

  it("should return 404 because symbol is not passed and endpoint is not found", async () => {
    const res = await request.get(`${HISTORICAL_PRICE}`);
    expect(res.statusCode).toBe(404);
  });
});
