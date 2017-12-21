// Global varibale
let postList;

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

    // Append random ID to the end of the file to make sure it doesn't cache
    let randomId = Math.random().toString().split(".")[1];
    let filePath = "posts/postList.txt?" + randomId;

    // Set up and send the request
    request.open("GET", filePath, true);
    request.send();
}

loadPostList();
