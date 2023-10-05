import { expect } from "chai";
import { forTesting } from "../utils/dataValidator.js";
import { getValidData } from "../utils/dataValidator.js";

const { sanitizeText, sanitizeNumber, sanitizeHex, sanitizeProps, sanitizeValues } = forTesting;

describe('sanitizeValues', () => {
  it('should return null if item.text is empty', () => {
    const item = { text: "", number: '123', hex: '3a1b2c4d5e6f7a891011121314151617' };
    const result = sanitizeValues(item);
    expect(result).to.be.null;
  });

  it('should return null if item.number is empty', () => {
    const item = { text: "test", number: '', hex: '3a1b2c4d5e6f7a891011121314151617' };
    const result = sanitizeValues(item);
    expect(result).to.be.null;
  });

  it('should return null if item.hex is empty', () => {
    const item = { text: "test", number: '1234', hex: '' };
    const result = sanitizeValues(item);
    expect(result).to.be.null;
  });

  it('should return null if item.hex is not valid', () => {
    const item = { text: "test", number: '1234', hex: '3a10314151617' };
    const result = sanitizeValues(item);
    expect(result).to.be.null;
  });


});

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

describe("sanitizeHex()", () => {
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

describe('sanitizeProps()', () => {
  it('should return null if any required prop is missing', () => {
    const item = { text: 'test', number: 1234 };
    expect(sanitizeProps(item)).to.be.null;
  });

  it('should remove additional properties not in the props array', () => {
    const item = { text: 'test', number: 1234, hex: 'test', extraProp: 'extra' };
    const sanitizedItem = sanitizeProps(item);
    expect(sanitizedItem).to.not.have.property('extraProp');
  });

  it('should keep only required properties', () => {
    const item = { text: 'test', number: 1234, hex: 'test', extraProp: 'extra' };
    const sanitizedItem = sanitizeProps(item);
    expect(sanitizedItem).to.deep.equal({ text: 'test', number: 1234, hex: 'test' });
  });

  it('should return the same object if all required props are present', () => {
    const item = { text: 'Hello', number: 1234, hex: 'test' };
    const sanitizedItem = sanitizeProps(item);
    expect(sanitizedItem).to.deep.equal(item);
  });
});

describe('getValidData()', () => {
  it('should return only valid data', async () => {
    const data = [
      { text: 'gBlHE' },
      {
        text: 'szXNygBaFzzxOfzzBYkZRRGbtHaZx',
        number: '5360903',
        hex: '0123456789abcdefABCDEF0123456789'
      },
      {
        text: 'TJyzJYjCV',
        number: '752440119',
        hex: '0123456789abcdefABCDEF0123456789'
      },
      {
        text: 'ndvgbmKXSjnpbfyckwdYjwfx',
        number: '3967',
        hex: 'e39ae83cf2f3a6af29'
      }
    ]
    const result = await getValidData(data);

    const validData = [
      {
        text: 'szXNygBaFzzxOfzzBYkZRRGbtHaZx',
        number: 5360903,
        hex: '0123456789abcdefABCDEF0123456789'
      },
      {
        text: 'TJyzJYjCV',
        number: 752440119,
        hex: '0123456789abcdefABCDEF0123456789'
      },
    ]

    expect(result).to.deep.equal(validData);
  });

});
