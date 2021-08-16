/**
 * A family want's to go on a vacation, but don't know what is the total amount of money they can spend on the trip.
 * Create the function that takes an array with objects and returns the sum of people's budgets.
 */

function vacationBudget(family: Person[]) {
  let sum = 0;
  family.forEach((people) => {
    if (people.budget > 0) sum += people.budget;
  });
  return sum;
}

export { vacationBudget };

interface Person {
  name: string;
  age: number;
  budget: number;
}
