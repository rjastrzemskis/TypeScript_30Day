function square(arr: number[]): number[] {
  return arr.map((x) =>
    Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : Math.pow(x, 2)
  );
}

console.log(square([4, 3, 9, 7, 2, 1])); // => [2,9,3,49,4,1]
