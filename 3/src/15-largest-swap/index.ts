/**
 * Write a function that takes a two-digit number and determines, if it's the largest of two possible digit swaps.
 */

function largestSwap(number: number):boolean {
    let numberarray = number.toString().split("");
    for (let i = 0; i < numberarray.length; i++) {
        return numberarray[i] > numberarray[i+1] 
 }
}

export { largestSwap };