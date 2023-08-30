import React from "react";
import { Layout } from "../components/Layout";
import { Outlet } from "react-router-dom";

export default function Root(): React.ReactElement {
  return (
    <>
      <Layout>
        <main>
          <Outlet />
        </main>
      </Layout>
    </>
  );
}
