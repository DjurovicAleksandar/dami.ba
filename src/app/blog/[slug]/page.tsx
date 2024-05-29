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
          content,
          publishedAt,
          smallDescription,
          author-> {name, image}
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
    <section className="w-full bg-lightBlue flex flex-col items-center justify-center pt-40 px-28 pb-20">
      <h2 className="pb-16 font-extrabold text-3xl text-darkerBlue">
        Dami.ba | BLOG
      </h2>
      <div className="flex flex-row-reverse items-start justify-center gap-x-10 w-full px-0 xl:px-28">
        <div className="flex flex-col gap-y-8">
          <p className="font-black text-darkerBlue opacity-65">
            {data.publishedAt}
          </p>
          <h1 className="font-bold text-5xl">{data.title}</h1>
          <p>{data.smallDescription}</p>
          <hr></hr>
          <div className="flex items-center justify-around">
            <Image
              src={urlFor(data.author.image).url()}
              width={80}
              height={80}
              className="rounded-full bg-white"
              alt={data.author.name}
            />
            <p className="uppercase font-bold text-darkerBlue opacity-65">
              {data.author.name}
            </p>
          </div>
        </div>
        <Image
          src={urlFor(data.mainImage).url()}
          width={550}
          height={550}
          priority
          className="rounded-xl w-1/2 shadow-lg"
          alt={data.title}
        />
      </div>
      <hr className="mt-16 w-full"></hr>
      <div className="mt-16 px-28 prose-headings:text-2xl prose-headings:font-bold prose-blue prose-lg">
        <PortableText value={data.content} />
      </div>
    </section>
  );
}
