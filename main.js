// Global varibale
let postList;

// Adds a random id to the end of a URL, to prevent caching
function appendRandomId(baseUrl) {
    let randomId = Math.random().toString().split(".")[1];
    return baseUrl + "?" + randomId;
}

// Strips all white space, #, -, *, _, +, ---, ___ and *** from the start and `, links, *, _, **, __ and ~~ throughout
function stripAll(string) {
    // Trim white space
    string = string.trim();

    // Split string and trim from start
    string = string.split(" ");

    // Strings with multiple characters need to be done before the single characters
    string[0] = string[0].replace("---", "");
    string[0] = string[0].replace("***", "");
    string[0] = string[0].replace("___", "");

    // Single character section
    string[0] = string[0].replace("#", "");
    string[0] = string[0].replace("-", "");
    string[0] = string[0].replace("*", "");
    string[0] = string[0].replace("_", "");
    string[0] = string[0].replace("+", "");

    // Join string back together
    string = string.join(" ");

    // Trim things from within string
    string = string.replace("`", "");
    string = string.replace("*", "");
    string = string.replace("_", "");
    string = string.replace("**", "");
    string = string.replace("__", "");
    string = string.replace("~~", "");

    // Return string
    return string;
}

// Gets the md file for a particular post
function getPost(post, callback) {
    // Prepare request
    let request = new XMLHttpRequest();

    // Prepare callback
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Callback
            callback(this.responseText);
        }
    }
    // Add unique number to prevent caching
    let postLink = "posts/" + appendRandomId(post.link);

    // Send the request
    request.open("GET", postLink, true);
    request.send();
}

// Sends request for the post list
function loadPostList() {
    var request = new XMLHttpRequest();

    // Preparing callback
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Call back
            postList = JSON.parse(this.responseText);
        }
    }

    // Add a random number to the end of the file to prevent caching
    let filePath = appendRandomId("posts/postList.txt");

    // Set up and send the request
    request.open("GET", filePath, true);
    request.send();
}

loadPostList();
