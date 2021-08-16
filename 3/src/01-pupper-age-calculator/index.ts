/**
 * Write a function that takes dog's age in human years as an argument and converts to dog years.
 * Return the result like so: "Your doggie is NN years old in dog years!"
 */

function pupperAgeCalculator(age: number) {
  const humanconv = 7;
  return "Your doggie is " + age * humanconv + " years old in dog years!";
}

export { pupperAgeCalculator };
