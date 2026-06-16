import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/**
 * Renders a Strapi media field through Gatsby's image pipeline.
 * Expects the media node populated with: { alternativeText, localFile { childImageSharp { gatsbyImageData } publicURL } }
 */
const StrapiImage = ({ media, alt, className, objectFit = "cover", loading = "lazy", fill = false, style }) => {
  if (!media || !media.localFile) return null;
  const altText = alt || media.alternativeText || "";
  const image = getImage(media.localFile);
  const wrapStyle = fill ? { width: "100%", height: "100%", ...style } : style;

  if (!image) {
    return media.localFile.publicURL ? (
      <img src={media.localFile.publicURL} alt={altText} className={className} style={wrapStyle} loading={loading} />
    ) : null;
  }
  return <GatsbyImage image={image} alt={altText} className={className} objectFit={objectFit} loading={loading} style={wrapStyle} />;
};

export default StrapiImage;
