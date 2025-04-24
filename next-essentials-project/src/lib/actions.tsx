"use server";

import { NewMeal } from "@/components/meals/meals-grid";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const isInvalidText = (text: string) => {
  return !text || text.trim().length === 0;
};

type State = {
  message: string | null;
};

export const shareMeal = async (_: State, formData: FormData): Promise<State> => {
  const meal: NewMeal = {
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
  };

  if (isInvalidText(meal.creator_email) || !meal.creator_email.includes("@")) {
    return {
      message: " Please enter a valid email address",
    };
  }
  if (isInvalidText(meal.creator)) {
    return {
      message: " Please enter a valid email address",
    };
  }
  if (isInvalidText(meal.title)) {
    return {
      message: " Please enter a valid email address",
    };
  }
  if (isInvalidText(meal.summary)) {
    return {
      message: " Please enter a valid email address",
    };
  }
  if (isInvalidText(meal.instructions)) {
    return {
      message: " Please enter a valid email address",
    };
  }
  if (!meal.image || meal?.image?.size === 0) {
    return {
      message: " Please enter a valid email address",
    };
  }

  try {
    await saveMeal(meal);
  } catch (error) {
    console.error(error);
    return {
      message: "Something went wrong",
    };
  }
  revalidatePath("/meals");
  redirect("/meals");
};
