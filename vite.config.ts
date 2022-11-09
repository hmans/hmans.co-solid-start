import solid from "solid-start/vite";
import { defineConfig } from "vite";
import mdx from "solid-start-mdx";

export default defineConfig({
  plugins: [
    await mdx(),
    solid({
      prerenderRoutes: ["/api/feed"],
      adapter: "solid-start-vercel",
      extensions: [".mdx", ".md"],
    }),
  ],
});
