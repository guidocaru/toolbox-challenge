import { expect } from "chai";
import { forTesting } from "../utils/dataValidator.js";

const { sanitizeText, sanitizeNumber, sanitizeHex } = forTesting;

describe("sanitizeText()", () => {
  it("should return the input string if it is a non-empty string", () => {
    const input = "test";
    const result = sanitizeText(input);
    expect(result).to.equal(input);
  });

  it("should return null for an empty string", () => {
    const input = "";
    const result = sanitizeText(input);
    expect(result).to.equal(null);
  });

  it("should return null for non-string input", () => {
    const input = 42;
    const result = sanitizeText(input);
    expect(result).to.equal(null);
  });

  it("should return null for undefined input", () => {
    const input = undefined;
    const result = sanitizeText(input);
    expect(result).to.equal(null);
  });
});

describe("sanitizeNumber()", () => {
  it("should return the parsed number if a valid number is provided", () => {
    const input = "42";
    const result = sanitizeNumber(input);
    expect(result).to.equal(42);
  });

  it("should return null for non-numeric input", () => {
    const input = "test";
    const result = sanitizeNumber(input);
    expect(result).to.equal(null);
  });

  it("should return null for empty input", () => {
    const input = "";
    const result = sanitizeNumber(input);
    expect(result).to.equal(null);
  });

  it("should return null for undefined input", () => {
    const input = undefined;
    const result = sanitizeNumber(input);
    expect(result).to.equal(null);
  });

  it("should handle negative numbers", () => {
    const input = "-42";
    const result = sanitizeNumber(input);
    expect(result).to.equal(-42);
  });

  it("should handle leading and trailing spaces", () => {
    const input = "   123   ";
    const result = sanitizeNumber(input);
    expect(result).to.equal(123);
  });

  it("should handle decimal numbers and round down", () => {
    const input = "3.14159";
    const result = sanitizeNumber(input);
    expect(result).to.equal(3);
  });
});

describe("sanitizeHex", () => {
  it("should return the input if it is a valid 32-character hex string", () => {
    const input = "0123456789abcdefABCDEF0123456789";
    const result = sanitizeHex(input);
    expect(result).to.equal(input);
  });

  it("should return null for invalid hex characters", () => {
    const input = "ghijklmnopqrstuvwxyz";
    const result = sanitizeHex(input);
    expect(result).to.equal(null);
  });

  it("should return null for hex strings with the wrong length", () => {
    const input = "12345678";
    const result = sanitizeHex(input);
    expect(result).to.equal(null);
  });

  it("should return null for empty input", () => {
    const input = "";
    const result = sanitizeHex(input);
    expect(result).to.equal(null);
  });

  it("should return null for undefined input", () => {
    const input = undefined;
    const result = sanitizeHex(input);
    expect(result).to.equal(null);
  });

  it("should return the input if it is valid uppercase hex", () => {
    const input = "ABCDEF0123456789ABCDEF0123456789";
    const result = sanitizeHex(input);
    expect(result).to.equal(input);
  });

  it("should return the input if it is valid lowercase hex", () => {
    const input = "abcdef0123456789abcdef0123456789";
    const result = sanitizeHex(input);
    expect(result).to.equal(input);
  });
});
