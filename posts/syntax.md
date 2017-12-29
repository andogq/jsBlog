Here is a quick rundown on the syntax of jsBlog. It is markdown, although there are some features (such as tables) which are on their way.
---
# Headings
---
# Heading size 1
    # Heading size 1
## Heading size 2
    ## Heading size 2
### Heading size 3
    ### Heading size 3
#### Heading size 4
    #### Heading size 4
##### Heading size 5
    ##### Heading size 5
###### Heading size 6
    ###### Heading size 6
---
# Text
---
Paragraphs
    Paragraphs
Paragraphs with
a line break
    Paragraphs with
    a line break
Paragraphs with

a new line
    Paragraph with

    a new line
__Bold text__
**Also bold text**
    __Bold text__
    **Also bold text**

_Italic text_
*Also italic text*
    _Italic text_
    *Also italic text*

___Bold italic text___
***Also bold italic text***
    ___Bold italic text___
    ***Also bold italic text***
---
# Lists
---
- Unordered
+ list
* Any of these points can be used
    - Unordered
    + list
    * Any of these points can be used
1. Ordered
2. List
6. The list index can be changed too
    1. Ordered
    2. List
    6. The list index can be changed too
---
# Horizontal rules
---
(The blue lines going across the screen)
    ---
---
# Code
    console.log("This is code!");
```
    console.log("This is code!");
```
(Four spaces before each line)
```js
console.log("There's more code!");
```
    ```js
    console.log("There's more code!");
    ```
(Back ticks are found usually above the tab key, with `~`. `js` can be replaced with any language for syntax coloring. If ommited the language will automatically be detected.)
``` nocode
nocode can also be used as a language option, to remove any syntax highlighting and line numbers
```
    ``` nocode
    nocode can also be used as a language option, to remove any syntax highlighting and line numbers
    ```

Inline `code`
    Inline `code`
---
# Links
[Link text](http://tomando.me)
    [Link text](http://tomando.me)
---
# Images
![Alternate text](http://lorempixel.com/800/500/city/)
    ![Alternate text](http://lorempixel.com/800/500/city/)
(May take a moment to load due to slow host. Local images can also be used too.)
