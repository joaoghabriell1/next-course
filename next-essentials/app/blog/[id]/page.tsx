import React from "react";

interface BlogPageParams {
  id: string;
}

const BlogPage = ({ params }: { params: BlogPageParams }) => {
  const { id } = params;

  return (
    <main>
      <h1>Post page</h1>
      <p>
        <strong>Post ID:</strong> {id}
      </p>
    </main>
  );
};

export default BlogPage;
