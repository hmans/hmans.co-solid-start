export type SolidStartFunctions<Frontmatter> = {
  getHeadings: () => {
    depth: number;
    text: string;
    slug: string;
  }[];
  getFrontMatter: () => Frontmatter;
};

export function glob(mask: string) {
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
