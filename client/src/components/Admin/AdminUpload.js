import React, { useState } from 'react';
import './AdminUpload.css'

const AdminUpload = () => {
  const [standard, setStandard] = useState('');
  const [links, setLinks] = useState('');
  const [file, setFile] = useState(null);

  const handleStandardChange = (e) => {
    setStandard(e.target.value);
  };

  const handleLinksChange = (e) => {
    setLinks(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can send the form data to your server using Axios or another HTTP library.
    // Here's an example of how to send the data if you have an API endpoint to post to.
    const formData = new FormData();
    formData.append('standard', standard);
    formData.append('links', links);
    formData.append('file', file);

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint.
    // axios.post(YOUR_API_ENDPOINT, formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     // Handle success or other actions
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     // Handle error
    //   });

    // For demonstration purposes, log the form data here.
    console.log('Form Data:', {
      standard,
      links,
      file,
    });
  };

  return (
    <div className="material-upload-container">
      <div className="material-upload-form">
        <h2>Upload Material</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="standard">Select Standard:</label>
            <select
              id="standard"
              name="standard"
              value={standard}
              onChange={handleStandardChange}
              required
              className="select-box"
            >
              <option value="">Select</option>
              <option value="Standard 1">Standard 1</option>
              <option value="Standard 2">Standard 2</option>
              <option value="Standard 3">Standard 3</option>
              <option value="Standard 4">Standard 4</option>
              <option value="Standard 5">Standard 5</option>
              <option value="Standard 6">Standard 6</option>
              <option value="Standard 7">Standard 7</option>
              <option value="Standard 8">Standard 8</option>
              <option value="Standard 9">Standard 9</option>
              <option value="Standard 10">Standard 10</option>
              <option value="Standard 11">Standard 11</option>
              <option value="Standard 12">Standard 12</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="links">Links:</label>
            <textarea
              id="links"
              name="links"
              value={links}
              onChange={handleLinksChange}
              rows="4"
              required
              className="text-area"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">File (PDF or Image):</label>
            <input
              type="file"
              id="file"
              name="file"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              required
              className="file-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;