export const validateLength = (data) => {
  return data.length > 0;
};

export const validateItem = (item) => {
  return validateProperties(item) && validateValues(item);
};

const validateProperties = (item) => {
  const props = ["text", "number", "hex"];

  const itemProps = Object.keys(item);

  const allPropertiesExist = props.every((prop) => itemProps.includes(prop));

  for (const key in item) {
    if (!props.includes(key)) {
      delete item[key];
    }
  }

  return allPropertiesExist;
};

const validateValues = (item) => {
  return (
    validateText(item.text) &&
    validateNumber(item.number) &&
    validateHex(item.hex)
  );
};

const validateText = (text) => {
  return text.length > 0;
};

const validateNumber = (number) => {
  return number.length > 0;
};

const validateHex = (hex) => {
  const hexPattern = /^[0-9a-fA-F]+$/;
  return hexPattern.test(hex) && hex.length === 32;
};
