import Link from "next/link";
import Image from "next/image";
import React from "react";

import logoImage from "@/assets/logo.png"; // Adjust the path as necessary

import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image priority src={logoImage} alt="logo" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink content="Browse Meals" path={"/meals"} />
          </li>
          <li>
            <NavLink content="Community" path={"/community"} />
          </li>
          <li>
            <NavLink content="Posts" path={"/posts"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
