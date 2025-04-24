import React from "react";

import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

type News = {
  id: string;
  slug: string;
  title: string;
  date: string;
  content: string;
  image: string;
};

const NewsList = () => {
  return (
    <ul className="news-list">
      {DUMMY_NEWS.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.id}`}>{news.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
