function arraycounting(arr: number[]): number {
  return arr.reduce((start, change) => start + change, 0);
}

console.log(arraycounting([1, 2, 3])); // 6
