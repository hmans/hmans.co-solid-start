import { For, Suspense } from "solid-js";
import { A } from "solid-start";
import { glob } from "./glob";

const posts = glob("./posts/*.{md,mdx}");

export default function Index() {
  return (
    <>
      <h1>Hendrik Mans</h1>
      <Suspense>
        <For each={Object.entries(posts)}>
          {([key, value]) => {
            const fm = value.getFrontMatter();
            return (
              <p>
                <A href={key}>{fm.title}</A>
              </p>
            );
          }}
        </For>
      </Suspense>
    </>
  );
}
