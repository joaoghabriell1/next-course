import { Meal, NewMeal } from "@/components/meals/meals-grid";
import sql from "better-sqlite3";

import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals(): Promise<Meal[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
  return meal;
}

export async function saveMeal(newMeal: NewMeal) {
  const slug = slugify(newMeal.title, { lower: true });
  const instructions = xss(newMeal.instructions);

  const extension = newMeal.image.name.split(".").pop();
  const fileName = `${slug}.${extension}`;
  const filePath = `public/images/${fileName}`;

  const stream = fs.createWriteStream(filePath);
  const bufferedImage = await newMeal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  const meal: Meal = {
    ...newMeal,
    slug: slug,
    image: `/images/${fileName}`,
    instructions: instructions,
  };

  db.prepare(
    "INSERT INTO meals (title, slug, image, summary, creator, creator_email, instructions) VALUES (@title, @slug, @image, @summary, @creator, @creator_email, @instructions)"
  ).run(meal);
}
