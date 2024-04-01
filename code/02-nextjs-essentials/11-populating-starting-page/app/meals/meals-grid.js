import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />{' '}
          {/* The spread operator is used to pass all the properties of the meal object as props to the MealItem component. */}
        </li>
      ))}
    </ul>
  );
}
