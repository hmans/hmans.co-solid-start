import { Documents } from "~/types";

const documents = import.meta.glob("./routes/posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
}) as Documents;

export const posts = documents;
