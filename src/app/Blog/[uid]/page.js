import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ContentBody from "@/components/ContentBody";
export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return <ContentBody page={page} />;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}