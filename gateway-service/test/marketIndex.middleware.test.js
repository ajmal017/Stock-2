const middleware = require('../middleware/marketIndex')
const httpMocks = require("node-mocks-http");

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = next = jest.fn()
});

describe('MarketIndex middleware', () => {
    it('should add market index to the array of tickers', () => {
        req.body.tickers = []
        middleware(req, res, next)
        expect(next).toHaveBeenCalledTimes(1)
    })

    it('should return 500 because there is no array of tickers', () => {
        middleware(req, res, next)
        expect(res.statusCode).toBe(500)
    })
})
