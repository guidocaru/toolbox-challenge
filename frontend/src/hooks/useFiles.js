import { useState, useEffect } from "react";

export const useFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:1234/files/data";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFiles(data);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  return files;
};
