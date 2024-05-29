import { TypedObject } from "@portabletext/types";

export interface BlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  mainImage: any;
  publishedAt: string;
}

export interface BlogPage {
  currentSlug: string;
  title: string;
  smallDescription: string;
  publishedAt: string;
  content: any;
  mainImage: any;
  author: {
    name: string;
    image: any;
  };
}
