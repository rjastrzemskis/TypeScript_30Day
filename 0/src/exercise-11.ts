function numbtoarray(arr: number): number[] {
return Array.from(Array(arr).keys()); 
}
console.log(numbtoarray(5)); // => [0,1,2,3,4]
