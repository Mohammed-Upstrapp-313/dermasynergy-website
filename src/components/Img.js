import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

/**
 * Optimized image by filename. One static query pulls every processed image
 * (AVIF/WebP + responsive srcset + blur-up), so this works for fixed images
 * AND dynamic/mapped ones (galleries, logos) where the name comes from data.
 *
 * Props:
 *   name      - file name in src/images, e.g. "about-lab.png"
 *   alt       - alt text
 *   className - applied to the wrapper
 *   fill      - stretch to fill the parent box (use with object-fit containers)
 *   objectFit - "cover" (default) | "contain"
 *   loading   - "lazy" (default) | "eager" (above-the-fold, e.g. hero)
 */
const Img = ({ name, alt = "", className, fill = false, objectFit = "cover", loading = "lazy", style }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" }, extension: { in: ["png", "jpg", "jpeg", "webp"] } }) {
        nodes {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);

  const node = data.allFile.nodes.find((n) => n.base === name);
  const image = node && getImage(node.childImageSharp);
  if (!image) {
    if (process.env.NODE_ENV !== "production") console.warn(`<Img> not found: ${name}`);
    return null;
  }

  const wrapStyle = fill ? { width: "100%", height: "100%", ...style } : style;

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      className={className}
      objectFit={objectFit}
      loading={loading}
      style={wrapStyle}
    />
  );
};

export default Img;
