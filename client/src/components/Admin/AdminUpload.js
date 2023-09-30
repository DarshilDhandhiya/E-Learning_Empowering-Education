// App.js
// import "./App.css";
import { useState, useEffect } from "react";
// import './AdminUpload.css'

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileUrls, setFileUrls] = useState([]);
  const [selectedStandard, setSelectedStandard] = useState("1");
  const [fileName, setFileName] = useState("");

  const uploadFile = () => {
    if (fileUpload == null) return;

    const fileRef = ref(
      storage,
      `files/Standard${selectedStandard}/${fileName || fileUpload.name + v4()}`
    );

    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrls((prev) => [...prev, { url, name: fileUpload.name }]);
      });
    });
  };

  useEffect(() => {
    setFileUrls([]);

    const filesListRef = ref(storage, `files/Standard${selectedStandard}`);

    listAll(filesListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setFileUrls((prev) => [
              ...prev,
              { url, name: item.name.split("/").pop() },
            ]);
          });
        });
      })
      .catch((error) => {
        console.error("Error listing files:", error);
      });
  }, [selectedStandard]);

  const handleFileChange = (event) => {
    setFileUpload(event.target.files[0]);
    setFileName("");
  };

  const handleStandardChange = (event) => {
    setSelectedStandard(event.target.value);
  };

  return (
    <div className="App">
      <nav>
        <label className="lab-submit" htmlFor="standardSelect">Select Standard: </label>
        <select
          id="standardSelect"
          value={selectedStandard}
          onChange={handleStandardChange}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={(i + 1).toString()}>
              Standard {i + 1}
            </option>
          ))}
        </select>
      </nav>
      <input type="file" onChange={handleFileChange} />
      <button className="btn-submit" onClick={uploadFile}>Upload File</button>

      {fileUrls.length > 0 && (
        <div>
          <h2>Uploaded Files:</h2>
          {fileUrls.map((file, index) => (
            <div key={index} className="file-preview">
              <div>{file.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
