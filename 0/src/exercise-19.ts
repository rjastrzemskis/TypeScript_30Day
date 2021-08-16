interface Whishes {
  title: string;
  price: number;
}
function shoppingSpree(arr: Whishes[]): number {
  return arr.reduce((currentsum, item) => currentsum + item.price,0);
}

const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005
