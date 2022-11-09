import { For, Suspense } from "solid-js";
import { A } from "solid-start";
import { posts } from "./posts";

function postPath(key: string) {
  return key.replace(/\.mdx?$/, "");
}

export default function Index() {
  return (
    <Suspense>
      <For each={Object.entries(posts)}>
        {([key, value]) => {
          const frontmatter = value.getFrontMatter();

          return (
            <p>
              <A href={postPath(key)}>{frontmatter.title}</A>{" "}
              {frontmatter.subtitle}
            </p>
          );
        }}
      </For>
    </Suspense>
  );
}
