function evensOnly(arr: number[]): number[] {
  return arr.filter((x) => x % 2 === 0);
}

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
