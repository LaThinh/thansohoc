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
    <header className="header sticky top-0 z-50 shadow-sm width-full bg-primary-foreground">
      <div className="header-container max-w-7xl m-auto flex justify-between items-center px-5 h-16">
        <div className="logo">
          <Link href="/" className="text-xl font-bold flex gap-4 items-center">
            <Image
              src="/logo.png"
              alt="Thần Số Học"
              width="64"
              height="50"
              style={{ objectFit: "cover" }}
              className="max-h[50px] overflow-hidden"
            />
            <span className="font-pattaya hidden md:block text-xl lg:text-3xl text-primary hover:opacity-80">
              Thần Số Học
            </span>
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
