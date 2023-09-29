import React, { PureComponent } from 'react';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './components/firebase';
import Back from "./components/Common/back/Back"
import './view.css'

class View extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedStandard: '1', // Default selected standard
      fileUrls: [],
    };
  }

  componentDidMount() {
    // Load files for the default selected standard when the component mounts
    this.loadFiles(this.state.selectedStandard);
  }

  loadFiles = (standard) => {
    this.setState({ fileUrls: [] });

    const filesListRef = ref(storage, `files/Standard${standard}`);

    listAll(filesListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            this.setState((prevState) => ({
              fileUrls: [...prevState.fileUrls, { url, name: item.name.split('/').pop() }],
            }));
          });
        });
      })
      .catch((error) => {
        console.error('Error listing files:', error);
      });
  };

  handleStandardChange = (event) => {
    const selectedStandard = event.target.value;
    this.setState({ selectedStandard });
    this.loadFiles(selectedStandard);
  };

  render() {
    const standards = Array.from({ length: 12 }, (_, i) => ({
      value: (i + 1).toString(),
      label: `Standard ${i + 1}`,
    }));

    return (
      <>
        <Back title='Uploaded Material' />
        <div className="card-container">
        <div className="card">
          <h1 className="card-title">Uploaded Material</h1>
          <label htmlFor="standardSelect" className="label">
            Select Standard:{' '}
          </label>
          <select
            id="standardSelect"
            value={this.state.selectedStandard}
            onChange={this.handleStandardChange}
            className="select"
          >
            {standards.map((standard) => (
              <option key={standard.value} value={standard.value}>
                {standard.label}
              </option>
            ))}
          </select>

          {this.state.fileUrls.length > 0 && (
            <div>
              <h2 className="card-subtitle">Viewed Files:</h2>
              {this.state.fileUrls.map((file, index) => (
                <div key={index} className="file-preview">
                  <div className="file-name">{file.name}</div>
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-file-link"
                  >
                    View File
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </>
    );
  }
}

export default View;
