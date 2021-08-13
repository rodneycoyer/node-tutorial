// GLOBALS - NO WINDOW !!!!

// These are the more commonly used globals, there are many others...

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (Common JS)
// module     = info about the current module (file)
// process    - info about environment (env) where the program is being executed
// setTimeout()
// setInterval()

console.log(__dirname);

setInterval(() => {
    console.log("hello world");
}, 1000)
