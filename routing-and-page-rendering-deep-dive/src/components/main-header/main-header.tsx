import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header id="main-header">
      <div id="logo">NextNews</div>
      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
