function capitalizeNames(arr: string[]): string[] {
  return arr.map(
    (string) => string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
  );
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
