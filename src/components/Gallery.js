import React, { useState } from "react";
import Img from "./Img";

/**
 * Product image gallery: a main image + clickable thumbnails.
 * @param {{images: {name: string, label: string}[], alt: string}} props
 */
const Gallery = ({ images, alt }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="pd-gallery">
      <div className="pd-main">
        <Img name={images[active].name} alt={alt} fill objectFit="cover" loading="eager" />
      </div>
      <div className="pd-thumbs">
        {images.map((img, i) => (
          <button
            key={img.name}
            className={`pd-thumb${i === active ? " active" : ""}`}
            aria-label={img.label}
            onClick={() => setActive(i)}
          >
            <Img name={img.name} alt="" fill objectFit="cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
