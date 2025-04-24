"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

import classes from "./nav-link.module.css";

const NavLink = ({ path, content }: { path: string; content: string }) => {
  const currPath = usePathname();

  return (
    <Link
      className={currPath.startsWith(path) ? classes.active : undefined}
      href={path}
    >
      {content}
    </Link>
  );
};

export default NavLink;
