import client from "./client.js";

export const getFiles = async () => {
  try {
    const response = await client.get(`/secret/files`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getFileById = async (filename) => {};
