import React, { useState } from 'react';
import Image from './Image';
import Favorites from './Favorites';

const ImageGallery = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (imageId) => {
    if (favorites.includes(imageId)) {
      setFavorites(favorites.filter(id => id !== imageId));
    } else {
      setFavorites([...favorites, imageId]);
    }
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        {[1, 2, 3, 4, 5].map(imageId => (
          <Image
            key={imageId}
            imageId={imageId}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <Favorites favoriteImages={favorites} />
    </div>
  );
};

export default ImageGallery;
