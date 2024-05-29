import { BlogCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const getData = async () => {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    title,
      "currentSlug": slug.current,
    mainImage,
    smallDescription,
    publishedAt
  }`;

  const data = await client.fetch(query);

  return data;
};

const BlogSection = async () => {
  const data: BlogCard[] = await getData();

  return (
    <section className="w-full flex flex-col items-center justify-center gap-y-20 my-20 px-56">
      <h2 className="text-6xl  mb-10 text-left w-full">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((post, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-6 hover:shadow-md rounded-xl hover:scale-105 duration-300 ease-in-out"
          >
            <Image
              src={urlFor(post.mainImage).url()}
              width={400}
              height={400}
              className="rounded-t-xl w-full"
              alt={post.title}
            ></Image>
            <div className="flex flex-col px-2 gap-y-4 pb-6">
              <h3 className="font-semibold text-2xl text-darkerBlue line-clamp-2">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-gray-600">
                {post.smallDescription}
              </p>
              <Link
                className="text-darkBlue border-darkBlue border hover:text-white hover:bg-darkBlue transition w-fit px-4 py-2 rounded-xl bg-transparent"
                href={`/blog/${post.currentSlug}`}
              >
                Pročitaj više
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
