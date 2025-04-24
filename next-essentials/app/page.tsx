import React from "react";
import Link from "next/link";
import Header from "./components/header";

const Home = () => {
  return (
    <main>
      <Header />
      <h1>Next JS essentials</h1>
      <p>
        <Link href="/about">About us</Link>
      </p>
    </main>
  );
};

export default Home;
