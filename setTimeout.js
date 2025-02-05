// Write a function delay(ms) that returns a Promise 
// resolving after ms milliseconds.
// Example: delay(2000).then(() => console.log
// ("Waited for 2 seconds!"));
 
function delay(ms){
   return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        }, ms);
    })
}
delay(3000).then(() => console.log(`Waited for ${3000 / 1000} seconds!`));