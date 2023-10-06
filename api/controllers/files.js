import { getFilesData, getFiles } from "../services/client/index.js";

export class FilesController {
  static async getFilesData(req, res) {
    try {
      const filesData = await getFilesData();
      res.json(filesData);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching files data.", error: error.message });
    }
  }

  static async getFilesList(req, res) {
    try {
      const files = await getFiles();
      res.json(files);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching files list.", error: error.message });
    }
  }
}
