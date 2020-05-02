const hasher = require("./hasher");
const jwtToken = require("./jwtToken");
const setCookie = require("./setCookie");
const httpMocks = require("node-mocks-http");

describe("Password hasher", () => {
  it("should return hashed password with length of 60 ", async () => {
    const hash = await hasher("testpassword");
    expect(hash).toHaveLength(60);
  });
  it("should throw an error because no password provided", async () => {
    await expect(hasher(null)).rejects.toThrow();
  });
});

describe("JWT token", () => {
  it("should create a JWT token with a length of 256", async () => {
    const payload = { test: "test" };
    const token = await jwtToken(payload);
    expect(token).toHaveLength(147);
  });

  it("should throw error becasue no payload is provided", async () => {
    await expect(jwtToken(null)).rejects.toThrow();
  });
});


describe("Authorization cookie setter", () => {
  const name = "Authorization";
  const payload = { token: name };
  const res = httpMocks.createResponse();
  it("should throw an error because no name provided", () => {
    expect(() => setCookie(null, payload, res)).toThrow();
  });

  it("should throw an error because no token provided", () => {
    expect(() => setCookie(name, null, res)).toThrow();
  });
  it("should throw an error because no res provided", () => {
    expect(() => setCookie(name, payload, null)).toThrow();
  });

});
