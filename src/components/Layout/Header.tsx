import { ReactElement } from "react";

type HeaderProps = {
  children?: ReactElement;
  title: string;
};

export function Header({ title }: HeaderProps): ReactElement {
  return (
    <header className="container">
      <h1>{title}</h1>
    </header>
  );
}
