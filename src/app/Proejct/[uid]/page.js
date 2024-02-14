import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ContentBody from "@/components/ContentBody";

import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { formatDate } from "@/components/FormatDate";
export default async function Page({ params }) {

    const client = createClient();
    const page = await client
        .getByUID("project", params.uid)
        .catch(() => notFound());
    const formattedDate = formatDate(page.data.date);
    return <Bounded>
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
            <Heading as="h1">{page.data.title}</Heading>
            <div className="flex gap-4 text-yellow-400">
                {page.tags.map((tag, index) => (
                    <span key={index} className="text-xl font-bold">
                        {tag}
                    </span>
                ))}
            </div>
            <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
                {formattedDate}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="prose prose-lg prose-invert mt-8 w-full max-w-none md:mt-10">
                    <SliceZone slices={page.data.slices} components={components} />
                </div>
                <div className="flex flex-col gap-10 items-center justify-center">
                    <Button
                        linkField={page.data.deployment}
                        label={page.data.deployment_label}
                        className="ml-3"
                    />
                    <Button
                        linkField={page.data.repo}
                        label={page.data.repo_label}
                        className="ml-3"
                    />
                </div>
            </div>
        </div>
    </Bounded>;
}

export async function generateMetadata({ params }) {
    const client = createClient();
    const page = await client
        .getByUID("project", params.uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("project");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
