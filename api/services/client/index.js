import { getFileList, getFileByName } from "../tbx/secret.js";
import { formatData } from "../../utils/formatter.js";
import { processContent } from "../../utils/dataProcessor.js";

export const getFilesData = async () => {
  const { files } = await getFileList();

  const filesContent = await getFilesContent(files);

  return filesContent;
};

const getFilesContent = async (files) => {
  const filesContent = await Promise.all(
    files.map(async (file) => {
      const fileContent = await getFileByName(file);
      return await processContent(fileContent);
    })
  );
  return filesContent.filter(Boolean);
};
