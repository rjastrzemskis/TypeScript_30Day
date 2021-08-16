/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string): string {
  let words = [];
  words = sentence.match(/\S+/g);
  let result = "";
  for (let i = 0; i < words.length; i++) {
    words[i].startsWith(letter)
      ? (result += words[i].split("").reverse().join("") + " ")
      : (result += words[i].split("").join("") + " ");
  }
  return result.trim();
}

export { kindergarten };
