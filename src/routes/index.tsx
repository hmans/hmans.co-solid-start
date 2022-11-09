import { For, Suspense } from "solid-js";
import { A } from "solid-start";
import { posts } from "./posts";

export default function Index() {
  return (
    <Suspense>
      <For each={posts}>
        {(post) => {
          return (
            <p>
              <A href={post.path}>{post.title}</A> {post.subtitle}
            </p>
          );
        }}
      </For>
    </Suspense>
  );
}
