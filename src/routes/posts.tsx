import { Outlet } from "solid-start";
import { Glob } from "~/types";

export type PostFrontmatter = {
  title?: string;
  sectionTitle?: string;
  date?: Date;
};

export type Documents = Glob<PostFrontmatter>;

export default function PostsLayout() {
  return <Outlet />;
}

const documents = import.meta.glob("./posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
}) as Documents;

export const posts = documents;
