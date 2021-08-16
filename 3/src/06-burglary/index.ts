/**
 * You just returned home to find your mansion has been robbed!
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */
interface Items {
  [name: string]: number;
};
function burglary(input: Items) {
  return !Object.keys(input).length
    ? "Lucky you!"
    : Object.values(input).reduce((acc, curr) => acc + curr);
}

export { burglary };
