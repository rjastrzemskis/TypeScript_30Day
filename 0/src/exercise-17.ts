function fiveCharactersOrFewerOnly(arr: string[]): string[] {
  return arr.filter((x) => x.length <= 5);
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
