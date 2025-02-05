new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello, World!");
        resolve("Promise resolved!");
    }, 2000);
}).then((message) => console.log(message));
