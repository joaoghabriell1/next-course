import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export type NewMeal = {
  title: string;
  image: File;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type Meal = {
  id?: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

interface MealsGridProps {
  meals: Meal[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            id={meal.id}
            title={meal.title}
            slug={meal.slug}
            image={meal.image}
            summary={meal.summary}
            creator={meal.creator}
            creator_email={meal.creator_email}
            instructions={meal.instructions}
          />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
