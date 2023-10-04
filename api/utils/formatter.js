import csv from "csvtojson";
import { validateLength, validateItem } from "./validations.js";

export const formatData = async (data) => {
  const formattedData = await Promise.all(
    data.map(async (data) => {
      const json = await csvToJson(data);
      const parsed = await formatFile(json);
      return parsed;
    })
  );

  return formattedData.filter(Boolean);
};

const csvToJson = async (data) => {
  const json = await csv().fromString(data);
  return json;
};

const formatFile = async (data) => {
  if (!validateLength(data)) {
    return null;
  }

  const { file: filename } = data[0];

  data = data.map(({ file, ...rest }) => rest);

  const validData = data.filter(validateItem);

  if (validData.length === 0) {
    return null;
  }

  return {
    file: filename,
    lines: validData,
  };
};
