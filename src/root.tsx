// @refresh reload
import { FileRoutes, Routes } from "solid-start";
import Layout from "./layout/Layout";
import "./root.scss";

export default function Root() {
  return (
    <Layout>
      <Routes>
        <FileRoutes />
      </Routes>
    </Layout>
  );
}
