import { ReactElement, ReactNode } from "react";

// components

import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header title="hello" />
      <main className="container bg-primary">{children}</main>
      <Footer />
    </>
  );
}
