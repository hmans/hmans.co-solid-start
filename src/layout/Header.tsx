import { A } from "solid-start";
import css from "./Header.module.scss";

export default function Header() {
  return (
    <header role="banner" class={css.header}>
      <A href="/" class={css.title}>
        hmans.co
      </A>
    </header>
  );
}
