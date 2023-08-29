import { ReactElement } from "react";
import { Link } from "react-router-dom";
type HeaderProps = {
  children?: ReactElement;
  title: string;
};

export function Header({ title }: HeaderProps): ReactElement {
  return (
    <header className="container">
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
