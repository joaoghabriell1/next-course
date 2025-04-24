// when a page is not using any dynamic data, we can use static rendering
// export const dynamic = "force-dynamic"; // this will force the page to be rendered on the server every time, not only on the first request
export const revalidate = 60; // this will revalidate the page every 60 seconds

import Link from "next/link";

import classes from "./page.module.css";

import MealsGrid from "@/components/meals/meals-grid";
import { Meal } from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "Meals",
  description: "Browse through a list of meals",
};

const Meals = async () => {
  const meals: Meal[] = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}> by you </span>
        </h1>
        <p>Choose your favorite meal!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Create a new meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </div>
  );
};

export default MealsPage;
