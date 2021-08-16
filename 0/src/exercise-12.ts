function reverse(arr: number): number[] {
  return String(arr).split("").map(Number).reverse();
}

console.log(reverse(348597)); // => [7,9,5,8,4,3]
