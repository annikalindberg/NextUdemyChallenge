import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  db.prepare('SELECT * FROM meals').all(); // returns an array of meals "all" is used to get all rows from the tableyou could also use "get" to get a single row or "run" to execute a query that doesn't return anything
  await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate a slow query{
  return db.prepare('SELECT * FROM meals').all();
}
