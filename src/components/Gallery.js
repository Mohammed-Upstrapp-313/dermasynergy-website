import React, { useState } from "react";

/**
 * Product image gallery: a main image + clickable thumbnails.
 * @param {{images: {src: string, label: string}[], alt: string}} props
 */
const Gallery = ({ images, alt }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="pd-gallery">
      <div className="pd-main">
        <img src={images[active].src} alt={alt} />
      </div>
      <div className="pd-thumbs">
        {images.map((img, i) => (
          <button
            key={img.src}
            className={`pd-thumb${i === active ? " active" : ""}`}
            aria-label={img.label}
            onClick={() => setActive(i)}
          >
            <img src={img.src} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
