import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from './meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{' '}
          <span className={classes.highlight}>just for you.</span>
        </h1>
        <p>
          {' '}
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your own recipe!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
