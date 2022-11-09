import { For, Suspense } from "solid-js";
import { A } from "solid-start";
import { posts } from "./posts";

function postPath(key: string) {
  return key.replace(/\.mdx?$/, "");
}

export default function Index() {
  return (
    <Suspense>
      <For each={posts}>
        {(post) => {
          return (
            <p>
              <A href={postPath(post.key)}>{post.title}</A> {post.subtitle}
            </p>
          );
        }}
      </For>
    </Suspense>
  );
}
