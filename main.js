// Global varibale
let postList;

// Elements
let divContent = document.getElementById("content");

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
function getPost(post, postId, callback) {
    // Prepare request
    let request = new XMLHttpRequest();

    // Prepare callback
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Callback. Post Id is returned for reference
            postList[postId].md = this.responseText;
            callback(postId);
        }
    }
    // Add unique number to prevent caching
    let postLink = "posts/" + appendRandomId(post.link);

    // Send the request
    request.open("GET", postLink, true);
    request.send();
}

// Turn markdown into html elements
function parseMarkdown(md) {
    // Final elements
    let finalElements = document.createElement("div");

    // Split the file into lines
    md = md.split("\n");

    let isParagraph = false;

    for (i=0; i<md.length; i++) {
        // Line by line work out elements
        let line = md[i].split(" ");
        let firstSection = line[0];


        // <hr/>
        if ((firstSection == "---") || (firstSection == "___") || (firstSection == "***")) {
            isParagraph = false;
            finalElements.appendChild(document.createElement("hr"));
        }

        // Ends the paragraph totally
        else if (firstSection == "" && isParagraph) {
            isParagraph = false;
        }

        // Headings
        else if (firstSection[0] == "#") {
            isParagraph = false;
            // Determine the heading size
            let headingSize = firstSection.split("").length;
            switch (headingSize) {
                case 1:
                headingSize = "h1";
                break;

                case 2:
                headingSize = "h2";
                break;

                case 3:
                headingSize = "h3";
                break;

                case 4:
                headingSize = "h4";
                break;

                case 5:
                headingSize = "h5";
                break;

                default:
                headingSize: "h6";
                break;
            }

            // Make the heading
            let heading = document.createElement(headingSize);
            // Get rid of the symbols at the start
            line.shift();
            heading.innerHTML = line.join(" ");
            // Append it
            finalElements.appendChild(heading);
        }

        // Paragraphs
        else {
            line = line.join(" ");
            if (isParagraph) {
                let length = finalElements.children.length - 1;
                finalElements.children[length].innerHTML += "<br/>" + line;
            } else {
                isParagraph = true;

                let paragraph = document.createElement("p");
                paragraph.innerHTML = line;
                finalElements.appendChild(paragraph);
            }
        }
    }

    return finalElements;
}

// Opens a window with the full post
function displayFullPost(postId) {
    // Hide the post list
    divContent.style.display = "none";

    // Get the current post details
    let currentPost = postList[postId];

    // Get the surrounding container
    let postView = document.getElementById("postView");

    // Make the header
    let postHeader = document.createElement("div");
    postHeader.id = "postHeader";

    // Append the element
    postView.appendChild(postHeader);

    // Make the heading
    let postHeading  = document.createElement("h1");
    postHeading.id = "postHeading";
    postHeading.innerHTML = currentPost.title;

    // Append the heading
    postHeader.appendChild(postHeading);

    // Make the post date
    let postDate = document.createElement("p");
    postDate.classList.add("date");
    postDate.innerHTML = currentPost.date;

    // Append the date to the header
    postHeader.appendChild(postDate);

    // Add the horizontal rule
    postHeader.appendChild(document.createElement("hr"));

    // Do the markdown
    let parsedMd = parseMarkdown(currentPost.md);
    parsedMd.id = "postContent";

    postView.appendChild(parsedMd);
}

// Displays all the posts from the post list with a preview
function displayPostList() {
    // For each post
    for (postId=0; postId < postList.length; postId++) {
        let currentPost = postList[postId];

        // Get the md for the post
        getPost(currentPost, postId, function(postId) {
            let thisPost = postList[postId];

            // Make the preview
            // Outer div
            let postPreview = document.createElement("div");
            postPreview.classList.add("postPreview");

            // Add a meta tag with the post id
            postPreview.postId = postId;

            // Heading
            let heading = document.createElement("h2");
            heading.classList.add("heading");
            heading.innerText = currentPost.title;
            postPreview.appendChild(heading);

            // Date
            let date = document.createElement("p");
            date.classList.add("date");
            date.innerText = currentPost.date;
            postPreview.appendChild(date);

            // hr
            let hr = document.createElement("hr");
            postPreview.appendChild(hr);

            // Preview
            let preview = document.createElement("div");
            preview.classList.add("preview");

            // Preview items (only 3)
            // Break apart the md file for parsing line by line
            let splitMdFile = currentPost.md.split("\n");
            for (i=0; i < 3; i++) {
                // Line element
                let previewLine = document.createElement("p");
                previewLine.innerText = stripAll(splitMdFile[i]);

                // Append line to the parent div
                preview.appendChild(previewLine);
            }

            // Append the preview
            postPreview.appendChild(preview);

            // Add the event listener
            postPreview.onclick = function() {
                displayFullPost(this.postId);
            }

            // Append the post preview to the content div
            divContent.appendChild(postPreview);
        });
    }
}

// Sends request for the post list
function loadPostList() {
    let request = new XMLHttpRequest();

    // Preparing callback
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Call back
            postList = JSON.parse(this.responseText);

            displayPostList();
        }
    }

    // Add a random number to the end of the file to prevent caching
    let filePath = appendRandomId("posts/postList.txt");

    // Set up and send the request
    request.open("GET", filePath, true);
    request.send();
}

loadPostList();
