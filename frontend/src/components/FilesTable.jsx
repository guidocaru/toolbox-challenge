//import Table from "react-bootstrap/Table";
import "../styles/FilesTable.css";

import { useFiles } from "../hooks/useFiles";

const FilesTable = () => {
  const files = useFiles();

  if (files.length > 0) {
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) =>
              file.lines.map((line, lineIndex) => (
                <tr key={`${index}-${lineIndex}`}>
                  <td>{file.file}</td>
                  <td>{line.text}</td>
                  <td>{line.number}</td>
                  <td>{line.hex}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>Loading files...</p>;
  }
};

export default FilesTable;
