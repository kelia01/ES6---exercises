// Your task to complete this challenge is to write a function that formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years,
//  days, hours, minutes, and seconds.
// It is much easier to understand with an example:
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"

const duration = seconds => {
    const secondsInMin = 60;
    const secondsInHour = 60 * secondsInMin;
    const secondsInday = 24 * secondsInHour;
    const secondsInYear = 365 * secondsInday ;
    let remSeconds = 0;

    if(seconds < 0) return "invalid time";
    if(seconds === 0) return "now";

    const year = Math.floor(seconds / secondsInYear);
    seconds %= secondsInYear;

    const day = Math.floor(seconds / secondsInday);
    seconds %= secondsInday;

    const hour = Math.floor(seconds / secondsInHour);
    seconds %= secondsInHour;

    const min = Math.floor(seconds / secondsInMin);
    seconds %= secondsInMin;

    if((seconds %= secondsInMin) !== 0){
       remSeconds = (seconds %= secondsInMin);
    }
    return `${year} years, ${day} days, ${hour} hours ${min} mins and ${remSeconds} seconds`
}

    

console.log(duration(242062374))