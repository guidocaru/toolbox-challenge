import { getFileList, getFileByName } from "../tbx/secret.js";

//call secret/files
//call secret/files/{file}
//parse all data
//return data

export const getFilesData = async () => {
  const { files } = await getFileList();

  const filesContent = await getFilesContent(files);

  parseData(filesContent);

  return filesContent;
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
