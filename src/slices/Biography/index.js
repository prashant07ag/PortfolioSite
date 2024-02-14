import Bounded from "@/components/Bounded";

/**
 * @typedef {import("@prismicio/client").Content.BiographySlice} BiographySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BiographySlice>} BiographyProps
 * @param {BiographyProps}
 */
import Heading from "@/components/Heading";
import { PrismicRichText } from "@prismicio/react";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
const Biography = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="lg" className="col-start-1">
          {slice.primary.heading}
        </Heading>

        <div className="prose prose-lg prose-slate prose-invert col-start-1">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <Button className="my-2"
          linkField={slice.primary.button_link}
          label={slice.primary.button_text}
        />
        <Avatar
          image={slice.primary.avtar}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
