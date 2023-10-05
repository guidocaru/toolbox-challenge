export const getValidData = async (data) => {
  const validData = await Promise.all(
    data.map(async (item) => {
      const validItem = await sanitizeItem(item);
      return validItem;
    })
  );

  return validData.filter(Boolean);
};

const sanitizeItem = async (item) => {
  item = sanitizeProps(item);

  if (item) item = sanitizeValues(item);

  return item;
};

const sanitizeProps = (item) => {
  const props = ["text", "number", "hex"];

  const hasRequiredProps = props.every((prop) =>
    Object.prototype.hasOwnProperty.call(item, prop)
  );

  if (hasRequiredProps) {
    for (const prop in item) {
      if (!props.includes(prop)) {
        delete item[prop];
      }
    }
    return item;
  }

  return null;
};

const sanitizeValues = (item) => {
  item.text = sanitizeText(item.text);

  if (!item.text) return null;

  item.number = sanitizeNumber(item.number);

  if (!item.number) return null;

  item.hex = sanitizeHex(item.hex);

  if (!item.hex) return null;

  return item;
};

const sanitizeText = (text) => {
  if (typeof text == "string" && text.length) return text;
  return null;
};

const sanitizeNumber = (number) => {
  const parsedNumber = parseInt(number);
  if (isNaN(parsedNumber)) return null;
  return parsedNumber;
};

const sanitizeHex = (hex) => {
  const hexPattern = /^[0-9a-fA-F]+$/;
  if (hexPattern.test(hex) && hex.length === 32) return hex;
  return null;
};

export const forTesting = {
  sanitizeValues,
  sanitizeText,
  sanitizeNumber,
  sanitizeHex,
  sanitizeProps
};
