/**
 * @typedef {import("@prismicio/client").Content.ContentIndexSlice} ContentIndexSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentIndexSlice>} ContentIndexProps
 * @param {ContentIndexProps}
 */
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
const ContentIndex = async({ slice }) => {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");
  const projects = await client.getAllByType("project");

  const items = slice.primary.content_type === "Blog" ? blogPosts : projects;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {slice.primary.description && (
        <div className="prose prose-xl prose-invert mb-8">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default ContentIndex;
