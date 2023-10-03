import { getFilesData } from "../services/client/index.js";

export class FilesController {
  static async getFilesData(req, res) {
    const filesData = await getFilesData();

    res.json(filesData);
  }
}
