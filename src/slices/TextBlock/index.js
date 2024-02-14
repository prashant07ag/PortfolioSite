/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
 */
import { PrismicRichText } from "@prismicio/react";
const TextBlock = ({ slice }) => {
  return (
    <div className="max-w-prose">
      <PrismicRichText field={slice.primary.text} />
    </div>
  );
};

export default TextBlock;
