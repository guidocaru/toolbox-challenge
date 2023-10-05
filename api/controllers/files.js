import { getFilesData, getFiles } from "../services/client/index.js";

export class FilesController {
  static async getFilesData(req, res) {
    const filesData = await getFilesData();
    if (filesData) return res.json(filesData);
    res.status(500).json({ message: "an error occured" });
  }

  static async getFilesList(req, res) {
    const files = await getFiles();
    if (files) return res.json(files);
    res.status(500).json({ message: "an error occured" });
  }
}
