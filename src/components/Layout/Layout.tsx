import React from "react";

// components

import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="container bg-primary">{children}</main>
      <Footer />
    </div>
  );
}
