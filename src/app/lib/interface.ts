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
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  content: TypedObject | TypedObject[];
}
