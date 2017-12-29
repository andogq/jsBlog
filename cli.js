const fs = require("fs");
const path = require("path");
const prettify = require("./prettify/prettify")

let title = "";
let date = "";
let link = "";

const regexNumber = /^\d+/;
const regexNonAlphanum = /\W+/g;

function generateEntry() {
    entry = {
        title: title,
        date: date,
        link: link
    }
    let posts = require(path.join(__dirname, "./posts/postList.json"))
    posts.push(entry)
    fs.writeFileSync(path.join(__dirname, "posts/postList.json"), JSON.stringify(posts, null, 4))
    fs.writeFileSync(path.join(__dirname, "posts/" + link), "# " + title + "\n")
    console.log("Fire up your editor and edit posts/" + link)
}
function interactiveMode() {
    throw "Unimplemented";
}
function cliMode() {
    if (process.argv[2] === "-h" || process.argv[2] === "--help") {
        usage();
        return;
    }
    title = process.argv[2];
    console.log("Title: " + title);
    if (process.argv[3] && !regexNumber.test(process.argv[3])) date = process.argv[3]
    else {
        let cDate = new Date();
        date = cDate.getDate() + "/" + cDate.getMonth() + "/" + cDate.getFullYear().toString().substr(2) // dd/mm/yy
        link = process.argv[3];
    }
    if (!link) link = title.toLowerCase().replace(regexNonAlphanum, "-") + ".md";
    console.log("Date: " + date)
    console.log("Link: " + link)
    generateEntry();
}
if (process.argv.length == 2) interactiveMode() // if no extra arguments are provided, switch to interactive mode
else cliMode() 
