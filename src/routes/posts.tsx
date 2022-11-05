import { Outlet } from "solid-start";

export default function PostsLayout() {
  // const mods = import.meta.glob("./posts/*.{md,mdx}", {
  //   eager: true,
  //   query: { meta: "" },
  // });

  // console.log(mods);

  return (
    <div>
      <h1>Userssss</h1>
      <Outlet />
    </div>
  );
}
