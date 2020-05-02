const docFindOne = require("./docFindOne");
const hasher = require("./hasher");
const jwtToken = require("./jwtToken");
const setCookie = require("./setCookie");
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const httpMocks = require("node-mocks-http");

jest.mock("../model/User");

const user = {
  _id: "5dab498f22175d001d3f1c19",
  email: "ignaciovidal89@gmail.com",
  password: "$2b$10$CrlvjQ//lZv770WXZNRyI.9RKPoGJmRRpdy5A.LI6pWo3KneTfpDa",
  createdAt: "2019-10-19T17:36:15.662Z",
  updatedAt: "2019-10-19T23:57:59.666Z",
  __v: 0
};

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

describe("docFindOne - Find one collection in DB", () => {
  it("should throw error because no model provided", async () => {
    await expect(docFindOne(null, { userId: user._id })).rejects.toThrow();
  });
  it("should return error because no search provided", async () => {
    await expect(docFindOne(user, null)).rejects.toThrow();
  });

  it("should return an existing collection", async () => {
    User.findOne.mockReturnValue(user);
    const res = await docFindOne(User, { userId: user._id });
    expect(res).toBe(user);
  });

  it("should return false becasue there is no existing collection", async () => {
    User.findOne.mockReturnValue(false);
    const res = await docFindOne(User, { userId: user._id });
    expect(res).toBeFalsy();
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

  it("should return res with Authorization cookie", () => {
    const obj = setCookie(name, payload, res);
    const cookie = expect(obj.cookie).toBeInstanceOf(Function);
  });
});
