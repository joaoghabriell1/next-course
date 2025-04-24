import NewsList from "@/components/news-list/news-lists";
import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return (
    <div>
      <h1>News page</h1>
      <NewsList />
    </div>
  );
};

export default NewsPage;
