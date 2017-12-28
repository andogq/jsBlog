# jsBlog

(I need to come up with a better name - bear with me)

---

## A simple static blog generator, using markdown

---

### What is this?

- A tool to generate simple blogs on a static website (including GitHub pages!), including images, and links

- A free tool to use and change as you desire (a backlink or mention would be nice though)

---

### What is this **not**?

- A full blog framework (due to the nature of static sites, complex features such as login systems and comments aren't really possible)

- A tool with a friendly interface to help with markdown generation (this is coming, just not yet)

---

### How to use

- Everything post related can be found in the `/posts` directory

- `postList.txt` is a `json` formatted file (I know, I'll change the extenstion eventually) which contains metadata about every post, it's format is pretty self-explanatory

---

#### `postList.txt` format (see `/posts/postList.txt` for an example)

- `title`: The title of the post

- `date`: The date that the post was made

- `link`: The name of the file where the markdown (`/posts/ is already assumed`). This means that different folders can be used to organise posts as you please.

---

#### Post files

- Other files in `/posts` (and any other directories inside there) are markdown files for posts

- They can be named anything, as long as it is reflected in `/posts/postList.txt`, otherwise it won't appear

- Basic markdown is supported at the moment, including headings, paragraphs and page rules (more to be added soon)

---

### Other comments

- This was initially a tool that I wrote over two weeks or so, to compliment a school project of mine, which can be found [here](link to come)

- I know that it doesn't look the best at the moment, I am working my way towards fixing this

- The code is also a mess at the moment, and I am well aware of this. I am more focussed on getting the hard bits (getting it working) before I go and fix things. Usually I'm neater but I'm in a rush at the moment.

---

Which brings me to...

### Contributing

- Pull requests would be amazing! I will have a rough TODO list, but if anything looks pressing, or you add a feature ect. put a request through and I'll take a look. Thanks!

---

### TODO

See the issues tab for an up-to-date list of things which need to be done

---

Anything else unexpected? If you need to contact me for whatever reason, I can be found at `portlester.tom@gmail.com`
