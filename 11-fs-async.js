// Async method
// Callback Hell
// requires 2 arguments ("path", "utf8", callback)
// Need to provide callback

const { readFile, writeFile } = require("fs")

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-sync.txt",
            `Here is the result : ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("done with callback task...");
            }
        )
    })
})

console.log("starting next task...")