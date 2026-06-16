import React from "react";

/**
 * Renders a Strapi media field using the ORIGINAL uploaded file (full quality,
 * exactly as uploaded — same as the legacy static site). Native lazy-loading keeps
 * it reasonably fast without re-compressing the image.
 */
const StrapiImage = ({ media, alt, className, objectFit = "cover", loading = "lazy", fill = false, style }) => {
  if (!media || !media.localFile || !media.localFile.publicURL) return null;
  const imgStyle = {
    ...(fill ? { width: "100%", height: "100%" } : {}),
    objectFit,
    ...style,
  };
  return (
    <img
      src={media.localFile.publicURL}
      alt={alt || media.alternativeText || ""}
      className={className}
      loading={loading}
      decoding="async"
      style={imgStyle}
    />
  );
};

export default StrapiImage;
