import { Outlet } from "solid-start";
import { Documents } from "~/types";

export default function PostsLayout() {
  return <Outlet />;
}

const documents = import.meta.glob("./posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
}) as Documents;

export const posts = documents;
