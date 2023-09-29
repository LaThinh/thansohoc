import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Menu from "./Menu";
import Link from "next/link";
import dynamic from "next/dynamic";

function Header() {
  // const ThemeToggle = dynamic(
  //   (() =>
  //     import("./ThemeToggle").then(({ ThemeToggle }) => ThemeToggle)) as any,
  //   { ssr: false }
  // ) as any;

  return (
    <header className="header sticky z-50 width-full bg-primary-foreground p-3 lg:px-5">
      <div className="header-container max-w-7xl m-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>
        <div className="navigation-menu hidden lg:flex">
          <Menu />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
