export type SolidStartFunctions<Frontmatter> = {
  getHeadings: () => {
    depth: number;
    text: string;
    slug: string;
  }[];
  getFrontMatter: () => Frontmatter;
};

export type Glob<T> = Record<string, SolidStartFunctions<T>>;
