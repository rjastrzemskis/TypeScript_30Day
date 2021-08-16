/**
 * You're given a string of words.
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I can't find Nemo :(".
 */

function findingNemo(input: string) {
  return input.indexOf("Nemo") !== -1
    ? "I found Nemo at " + input.split(" ").indexOf("Nemo") + "!"
    : "I can't find Nemo :(";
}

export { findingNemo };
