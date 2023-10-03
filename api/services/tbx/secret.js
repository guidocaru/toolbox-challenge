import client from "./client.js";
import { handleError, handleResponse } from "./handler.js";

export const getFileList = async () => {
  try {
    const response = await client.get(`/secret/files`);
    return handleResponse(response);
  } catch (error) {
    return error.response;
  }
};

export const getFileByName = async (file) => {
  try {
    const response = await client.get(`/secret/file/${file}`);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
