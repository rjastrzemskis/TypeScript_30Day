/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number):string { 
    const date = new Date(seconds * 1000); // multiply by 1000 because Date() requires miliseconds
    return date.toUTCString().split(' ')[4];
}
export { digitalClock };