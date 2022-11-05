export type SolidStartFunctions<Frontmatter> = {
  getHeadings: () => {
    depth: number;
    text: string;
    slug: string;
  }[];
  getFrontMatter: () => Frontmatter;
};

export type GlobFunctions = SolidStartFunctions<{
  title?: string;
  sectionTitle?: string;
  order?: number;
  section?: string;
  sectionOrder?: number;
  subsection?: string;
}>;

export type Documents = Record<string, GlobFunctions>;
