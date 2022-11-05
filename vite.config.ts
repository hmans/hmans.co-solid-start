import solid from "solid-start/vite";
import { defineConfig } from "vite";
import mdx from "solid-start-mdx";

export default defineConfig({
  plugins: [
    await mdx(),
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      adapter: "solid-start-vercel",
      extensions: [".mdx", ".md"],
    }),
  ],
});
