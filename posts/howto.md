# How to make a post
1. Open `posts/postList.txt` in your preferred text editor (Word or Pages will __not__ work). This file holds all the information about each post. The file is in JSON format, with each node representing a post.
``` nocode
File: posts/postList.txt
{
    [                       --\       "title" -> The name of the post
        "title": "New post",  |        "date" -> The date that the post was created
        "date": "1/1/17",     |- Post  "link" -> The name of the md file where the
        "link": "newpost.md"  |  node            content is stored. It is already
    ]                       --/                  assumed that this is in the posts/
}                                                folder, but sub folders can be created
```
2. Copy the template to the top of the list (so that new posts are at the top), and change the `title`, `date`, and `link` to whatever suits. __Note:__ The link is the name of the markdown file in the `posts/` folder. This means that sub folders can be created inside to store particular posts, aslong as the link matches up. This makes it easier to sort and organise posts.
3. Once the `posts/postLink.txt` file has been edited, it is time to create a file in the same location that you specified in the `link` section above. This is your markdown file, where the content of the post goes, and can be of any length. Details on the syntax of markdown that is supported is in the next post.
4. Once you have your post complete, it is time to save it, and go back to the web-browser. Load up `index.html` in the root folder of this repo, and your posts should be there!
---
# How to use jsBlog on a website
To use jsBlog on a website, simply copy everything from the root folder to a folder of your choosing on the site.
Eg. If your site is `example.com`, it would be a good idea to make a folder `blog`, and place everything in there, like so.
``` nocode
example.com/
|- index.html
|- src/
|  |- main.js
|  `- main.css
`- blog/ <--- Visit this url for the blog
   |- index.html
   |- main.css
   |- main.js
   `- posts/
ect
```
