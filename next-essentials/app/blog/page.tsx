import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>The Blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </div>
  );
};

export default Blog;
