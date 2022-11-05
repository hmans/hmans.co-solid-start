import { For, Suspense } from "solid-js";
import { A } from "solid-start";

type SolidStartFunctions<Frontmatter> = {
  getHeadings: () => {
    depth: number;
    text: string;
    slug: string;
  }[];
  getFrontMatter: () => Frontmatter;
};

function glob(mask: string) {
  return import.meta.glob<
    true,
    any,
    SolidStartFunctions<{
      title?: string;
      sectionTitle?: string;
      order?: number;
      section?: string;
      sectionOrder?: number;
      subsection?: string;
    }>
  >("./posts/*.{md,mdx}", {
    eager: true,
    query: { meta: "" },
  });
}

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
