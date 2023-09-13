import React from 'react';
import Back from '../../Common/back/Back';
import '../Standard.css' // Import the CSS file for styling

const videoLinks = {
  Maths: [
    'https://www.youtube.com/embed/k6kpgObkmfk',
  ],
};

const Standard9 = () => {
  return (
    <div>
      <Back title='Standard1' />

      {/* Render video links by category */}
      {Object.entries(videoLinks).map(([category, links]) => (
        <div key={category}>
          <h1>{category}</h1>
          {links.map((videoUrl, index) => (
            <div key={index}>
              <iframe
                width="100%"
                height="315"
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
                title={`YouTube Video ${index}`}
                className="video-card" // Apply the video-card class
              ></iframe>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Standard9;
