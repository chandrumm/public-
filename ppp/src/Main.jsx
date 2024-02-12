// Main.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { imageId } = useParams();

  return (
    <div>
      <h2>This is the image page</h2>
      {imageId && (
        <div>
          <img src="adsf" alt={`fghj...${imageId}`} />
        </div>
      )}
    </div>
  );
};

export default Main;
