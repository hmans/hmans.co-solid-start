import { For, Suspense } from "solid-js";
import { A } from "solid-start";
import { Documents } from "~/types";

const posts = import.meta.glob("./posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
}) as Documents;

function postPath(key: string) {
  return key.replace(/\.mdx?$/, "");
}

export default function Index() {
  return (
    <>
      <h1>Hendrik Mans</h1>

      <Suspense>
        <For each={Object.entries(posts)}>
          {([key, value]) => {
            const frontmatter = value.getFrontMatter();

            return (
              <p>
                <A href={postPath(key)}>{frontmatter.title}</A>
              </p>
            );
          }}
        </For>
      </Suspense>
    </>
  );
}
