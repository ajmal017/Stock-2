const auth = require("./auth");
const httpMocks = require("node-mocks-http");
const jwtToken = require("../utils/jwtToken");

let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("Auth middleware", () => {
  it("should throw return 401 because no token provided", async () => {
    await auth(req, res, next);
    expect(res.statusCode).toBe(401);
  });
  it("should throw return 401 because  token is invalid", async () => {
    req.cookies = { Authorization: "test" };
    await auth(req, res, next);
    expect(res.statusCode).toBe(500);
  });
  it("should call next because token is valid", async () => {
    const payload = {
      userId: "12345678",
      role: "admin",
      subscription: "free"
    };
    const token = await jwtToken(payload);
    req.cookies = { Authorization: token };
    await auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
