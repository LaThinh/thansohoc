"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes: { name: string; value: string }[] = [
  {
    name: "Light",
    value: "light",
  },
  // {
  //   name: "Rose",
  //   value: "rose",
  // },
  {
    name: "Dark",
    value: "dark",
  },
  {
    name: "System",
    value: "system",
  },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [themeCurrent, setThemeCurrent] = useState("theme");
  useEffect(() => {
    if (theme) {
      setThemeCurrent(theme);
    }
    console.log(theme);
  }, []);

  const ToggleTheme = () => {
    console.log("Toggle Theme");

    if (themeCurrent == "light") {
      setTheme("dark");
      setThemeCurrent("dark");
    } else {
      setTheme("light");
      setThemeCurrent("light");
    }
  };

  return (
    <div className="theme-change flex items-center gap-2">
      <strong className="capitalize">{themeCurrent}</strong>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => ToggleTheme()}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {themes.map((item) => (
            <DropdownMenuItem
              key={item.value}
              defaultChecked={item.value == themeCurrent ? true : false}
              onClick={() => {
                setTheme(item.value);
                setThemeCurrent(item.name);
              }}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>

        {/* <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent> */}
      </DropdownMenu>
    </div>
  );
}
