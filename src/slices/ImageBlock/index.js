import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageBlockSlice} ImageBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageBlockSlice>} ImageBlockProps
 * @param {ImageBlockProps}
 */
const ImageBlock = ({ slice }) => {
  return (
    <PrismicNextImage field={slice.primary.image} className="not-prose w-full h-auto rounded-md  my-10 md:my-14 lg:my-16"></PrismicNextImage>
  );
};

export default ImageBlock;
