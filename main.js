// Global varibale
let postList;

// Adds a random id to the end of a URL, to prevent caching
function appendRandomId(baseUrl) {
    let randomId = Math.random().toString().split(".")[1];
    return baseUrl + "?" + randomId;
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
