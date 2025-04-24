import React from "react";
import Image from "next/image";

import classes from "./page.module.css";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

interface MealDetailsPageProps {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<MealDetailsPageProps>;
}) {
  const { id } = await params;

  const meal = await getMeal(id);

  return {
    title: meal.title,
    description: meal.summary,
  };
}

const MealDetailsPage = async ({
  params,
}: {
  params: Promise<MealDetailsPageProps>;
}) => {
  const { id } = await params;

  const meal = await getMeal(id);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt="Meal Image" fill />
        </div>
        <div>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
