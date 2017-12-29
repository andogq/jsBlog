const fs = require("fs");
const path = require("path");
const readline = require("readline");

let rl = null; 

let title = "";
let date = "";
let link = "";

const regexNumber = /^\d+/;
const regexNonAlphanum = /\W+/g;

function generateDate() {
    let cDate = new Date();
    return cDate.getDate() + "/" + cDate.getMonth() + "/" + cDate.getFullYear().toString().substr(2); // dd/mm/yy
}

function generateLinkFromTitle(title) {
    return title.toLowerCase().replace(regexNonAlphanum, "-") + ".md";
}

function generateEntry() {
    entry = {
        title: title,
        date: date,
        link: link
    };
    let posts = require(path.join(__dirname, "posts/postList.json"));
    posts.push(entry);
    fs.writeFileSync(path.join(__dirname, "posts/postList.json"), JSON.stringify(posts, null, 4));
    fs.writeFileSync(path.join(__dirname, "posts/" + link), "# " + title + "\n")
    console.log("Fire up your editor and edit posts/" + link);
}

function requestTitle() {
    rl.question('Title: ', (t) => {
        if (!t) requestTitle();
        else {
            title = t;
            requestDate();
        }
    });
}

function requestDate() {
    let genDate = generateDate();
    rl.question('Date('+genDate+'): ', (d) => {
        date = d || genDate;
        requestLink();
    });
}

function requestLink() {
    let genLink = generateLinkFromTitle(title);
    rl.question('Link('+genLink+'): ', (l) => {
        link = l || genLink;
        generateEntry();
        rl.close();
    });
}

function interactiveMode() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    requestTitle();
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
        date = generateDate()
        link = process.argv[3];
    }
    if (!link) link = generateLinkFromTitle(title); 
    console.log("Date: " + date)
    console.log("Link: " + link)
    generateEntry();
}
if (process.argv.length == 2) interactiveMode() // if no extra arguments are provided, switch to interactive mode
else cliMode() 
