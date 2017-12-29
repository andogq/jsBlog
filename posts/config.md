`config.json` is the only file that needs to be edited in order to customise the appearance of the blog.
More customisation options are in the works. Open an issue if you'd like to see a particular option and I'll make it as soon as I can.
---
# Syntax
It's syntax is pretty self explanitory. Any value in the file can be changed.
Colors can be either common names (`red`, `blue` ect) or hex values (`#33AD12`).
Fonts must be websafe fonts to work on all devices.
If nothing is provided in this file, then a plain, black and white theme is defaulted to, which isn't very nice.
``` nocode
File: config.json
{
    "title": "jsBlog",                     <-.-- Title and subtitle of
    "subtitle": "A static markdown blog",  <-'   the blog (appears in
    "colors": {                       \          the header)
        "header": {                    |
            "background": "#FF6B15",   |
            "text": "white"            |
        },                             |
        "postPreview": {               |
            "background": "#00B2B2",   |
            "text": "white"            |
        },                             |
        "post": {                      |
            "closeButton": "#FF6B15",  |---- Controls the colors of
            "heading": "#FF6B15",      |     different parts of the
            "hr": "#00B2B2",           |     blog
            "h1": "#FF7B2E",           |
            "h2": "#B24607",           |
            "h3": "black",             |
            "h4": "black",             |
            "h5": "black",             |
            "h6": "black",             |
            "p": "black"               |
        }                              |
    },                           ____ /
    "fonts": {                        \
        "header": "sans-serif",        |
        "postPreview": "sans-serif",   |
        "post": {                      |
            "heading": "sans-serif",   |
            "h1": "sans-serif",        |
            "h2": "sans-serif",        |
            "h3": "sans-serif",        |---- Controls the fonts of
            "h4": "sans-serif",        |     different things in the
            "h5": "sans-serif",        |     blog
            "h6": "sans-serif",        |
            "p": "serif"               |
        }                              |
    }                             ____/
}
```
---
# Sharing
Since all of the styling is in a single file, this file can be shared around as a theme, or can be swapped in and out of blogs at different times.
