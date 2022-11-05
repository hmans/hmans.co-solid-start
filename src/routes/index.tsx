import { For, Suspense } from "solid-js";
import { A } from "solid-start";

const foo = import.meta.glob("./posts/*.{md,mdx}", {
  eager: true,
  query: { meta: "" },
});

export default function Index() {
  return (
    <>
      <h1>Hendrik Mans</h1>
      <Suspense>
        <For each={Object.entries(foo)}>
          {([key, value]) => {
            return (
              <p>
                <A href={key}>Post Title Here</A>
              </p>
            );
          }}
        </For>
      </Suspense>
    </>
  );
}
