const middleware = require('../middleware/validateTickers')
const httpMocks = require("node-mocks-http");

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = next = jest.fn()
});

describe('Validate tickers middleware', () => {
    it('should call next because tickers are valid', () => {
        req.body.tickers = ['GS', 'BAC']
        middleware(req, res, next)
        expect(next).toHaveBeenCalled()
    })

    it('should return 404 because the Tickers are not valid ', () => {
        req.body.tickers = ['notValid', 'BAC']
        middleware(req, res, next)
        expect(res.statusCode).toBe(404)
    })

    it('should return 500 because there are no Tickers ', () => {
        middleware(req, res, next)
        expect(res.statusCode).toBe(500)
    })

})
