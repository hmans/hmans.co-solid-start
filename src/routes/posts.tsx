import { Outlet } from "solid-start";
import { Glob } from "~/types";

export type PostFrontmatter = {
  title?: string;
  subtitle?: string;
  date?: string;
};

export type Documents = Glob<PostFrontmatter>;

export default function PostsLayout() {
  return (
    <article>
      <h1>Insert Post Title from Frontmatter Here</h1>
      <Outlet />
    </article>
  );
}

const documents = import.meta.glob("~/routes/posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
}) as Documents;

/* Todo: do some processing on the documents here */
export const posts = Object.entries(documents).map(([filename, doc]) => {
  const frontmatter = doc.getFrontMatter();

  return {
    ...frontmatter,
    path:
      "/posts/" +
      filename
        .split("/")
        .pop()!
        .replace(/\.mdx?$/, ""),
    date: frontmatter.date ? Date.parse(frontmatter.date) : undefined,
  };
});
