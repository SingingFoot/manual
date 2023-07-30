---
title: Directory indicator
---

Why, when you export one file <code>style.css</code> to another file `script.js` in JavaScript and these both files are in the same folder, do you need to write the path as `./file.css`? Why don't you write just `style.css`? Why do you need to add this `./` part before?

In JavaScript, when you want to import or reference a file that is located in the same folder as the current file, you need to specify the relative path to that file. The reason you need to add `./` before the file name is to indicate that you are referring to a file in the current directory.

Let's understand why this is necessary.

## Relative Paths 

In JavaScript (and many other programming languages), file paths can be specified as either absolute or relative. An absolute path starts from the root directory of the file system, while a relative path starts from the current directory of the file that is making the reference.

## Current Directory Indicator 

The `./` at the beginning of the file name is known as the **"current directory indicator."** It tells the system to look for the file in the current directory where the JavaScript file (in this case, `script.js`) is located.

## Avoiding Confusion 

Adding `./` helps to avoid any confusion between relative and absolute paths. By explicitly specifying `./style.css`, you make it clear that you are referring to a file named `style.css` in the current directory, regardless of where the JavaScript file is being executed from.

## Consistency Across Platforms 

Using `./style.css` ensures consistency across different platforms (Windows, macOS, Linux) where file path conventions may vary.

So you need to add `./` before the file name when importing or referencing a file in JavaScript to indicate that you are referring to a file in the current directory. It's a best practice to use relative paths like this to ensure clarity and consistency in your code.