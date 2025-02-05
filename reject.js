// Create a Promise that rejects with an error
// message "Something went wrong!" after 3 seconds.
// Use .catch() to handle the error.

new Promise(function(resolve, reject) {
    setTimeout(function(){
        reject('Something went wrong!');
    }, 3000)

}).catch((error) => console.log(error))