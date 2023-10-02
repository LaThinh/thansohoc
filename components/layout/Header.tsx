import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Menu from "./Menu";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

function Header() {
  // const ThemeToggle = dynamic(
  //   (() =>
  //     import("./ThemeToggle").then(({ ThemeToggle }) => ThemeToggle)) as any,
  //   { ssr: false }
  // ) as any;

  return (
    <header className="header sticky top-0 z-50 shadow-md width-full bg-primary-foreground">
      <div className="header-container max-w-7xl m-auto flex justify-between items-center px-5 h-16">
        <div className="logo">
          <Link href="/" className="text-xl font-bold">
            <Image
              src="/Logo-ThanSoHoc.png"
              alt="Thần Số Học"
              width="240"
              height="50"
              style={{ objectFit: "cover" }}
              className="max-h[50px] overflow-hidden"
            />
          </Link>
        </div>
        <div className="navigation-menu hidden md:flex">
          <Menu />
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
