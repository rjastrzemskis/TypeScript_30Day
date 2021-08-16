function arraychanges(arr: number[]): number[] {
  const newArr = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0 ? (newArr[0] += 1) : (newArr[1] += arr[i]);
  }
  return newArr;
}

console.log(
  arraychanges([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
); // you should return [10, -65].
