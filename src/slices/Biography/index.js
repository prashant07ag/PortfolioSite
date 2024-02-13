/**
 * @typedef {import("@prismicio/client").Content.BiographySlice} BiographySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BiographySlice>} BiographyProps
 * @param {BiographyProps}
 */
const Biography = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for biography (variation: {slice.variation}) Slices
    </section>
  );
};

export default Biography;
