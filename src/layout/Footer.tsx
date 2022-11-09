import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer role="main" class={css.footer}>
      Made with <span style="color: #e25555;">&hearts;</span> in Wedel by
      Hendrik Mans, 2022
    </footer>
  );
}
