import csv from "csvtojson";
import { getValidData } from "./dataValidator.js";

export const processContent = async (content) => {
  if (!content) {
    return null;
  }

  const json = await csvToJson(content);
  const formatted = await formatContent(json);

  return formatted;
};

const csvToJson = async (data) => {
  const json = await csv().fromString(data);
  return json;
};

const formatContent = async (content) => {
  if (content.length < 1) {
    return null;
  }

  const { file: filename } = content[0];

  content = content.map(({ file, ...rest }) => rest);

  const validData = await getValidData(content);

  if (validData.length === 0) {
    return null;
  }

  return {
    file: filename,
    lines: validData,
  };
};
