import { BlogPage } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

const getData = async (slug: string) => {
  const query = `
    *[_type == "post" && slug.current == "${slug}"] {
        "currentSlug": slug.current,
          title,
          mainImage,
          content
      } [0]`;

  const data = await client.fetch(query);
  return data;
};

export default async function BlogSlug({
  params,
}: {
  params: { slug: string };
}) {
  const data: BlogPage = await getData(params.slug);
  return (
    <section className="w-full bg-lightBlue flex flex-col justify-center pt-40 px-28">
      <div className="flex flex-col items-center gap-y-10 w-full">
        <h1 className="font-bold text-5xl">{data.title}</h1>
        <Image
          src={urlFor(data.mainImage).url()}
          width={800}
          height={800}
          priority
          className="rounded-xl shadow-lg"
          alt={data.title}
        />
      </div>
      <div className="mt-16 prose-darkBlue prose-xl">
        <PortableText value={data.content} />
      </div>
    </section>
  );
}
