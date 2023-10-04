import { getFileList, getFileByName } from "../tbx/secret.js";
import { formatData } from "../../utils/formatter.js";

export const getFilesData = async () => {
  const { files } = await getFileList();

  const filesContent = await getFilesContent(files);

  const data = await formatData(filesContent);

  return data;
};

const getFilesContent = async (files) => {
  const filesContent = await Promise.all(
    files.map(async (file) => {
      const fileContent = await getFileByName(file);
      return fileContent;
    })
  );

  return filesContent.filter(Boolean);
};
