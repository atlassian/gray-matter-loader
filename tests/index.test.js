// @flow
const grayMatther = require("gray-matter");
const loader = require("../index");

jest.mock("gray-matter");

describe("gray-matter s default export function", () => {
  it("should be called when no options are passes", () => {
    loader("test");
    expect(grayMatther).toHaveBeenCalledWith("test", {});
  });
  it("should be called with options that are passed through", () => {
    loader("test");
    expect(grayMatther).toHaveBeenCalledWith("test", {});
  });
});
