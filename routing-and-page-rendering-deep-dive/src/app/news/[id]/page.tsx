import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const NewsPageDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const newsDetails = DUMMY_NEWS.find((news) => news.id === id);

  if (!newsDetails) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsDetails.image}`} alt={newsDetails.title} />
        <h1>{newsDetails.title}</h1>
        <time dateTime={newsDetails.date}>{newsDetails.date}</time>
      </header>
      <p>{newsDetails.content}</p>
    </article>
  );
};

export default NewsPageDetails;
