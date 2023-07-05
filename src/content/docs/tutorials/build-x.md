---
title: Short introduction to website generators
---

## Introduction to Website Generators and Headless CMS

Website generators, such as Astro, MkDocs, Hugo, Jekyll, and Docusaurus, are powerful tools that simplify the process of building and managing websites. They allow developers and content creators to generate static websites quickly and efficiently. In recent years, there has been a rise in the popularity of headless CMS (Content Management System), which is often used in conjunction with website generators. A headless CMS is "headless" because it decouples the content management backend from the front-end presentation layer. This separation offers flexibility and convenience, as it allows developers to focus on building the front-end using website generators while leveraging the CMS for content management.


### Astro

In the code example for Astro, we have a simple JSX component written in JavaScript. Astro, a modern website generator, allows developers to build static websites using familiar technologies like React. This code snippet demonstrates how to create a basic component that renders a heading and a paragraph.

```js
import { Astro } from 'astro';

export default function MyComponent() {
  return (
    <div>
      <h1>Hello, Astro!</h1>
      <p>Welcome to my website.</p>
    </div>
  );
}
```

### MkDocs

In the code example for MkDocs, we have a Markdown file that represents a section of documentation. MkDocs is a popular website generator that uses Markdown files as the primary source of content. This snippet shows how easy it is to structure and write documentation using Markdown syntax.

```markdown
# My Documentation

## Introduction
This is an introduction to my documentation.

## Installation
To install the application, follow these steps:

1. Download the installer from the official website.
2. Run the installer and follow the on-screen instructions.
3. Launch the application.
```

### Hugo

The code examples for Hugo and Jekyll showcase the simplicity and elegance of these website generators. Both examples demonstrate how to structure the HTML code for a basic website. Hugo and Jekyll use template engines, allowing developers to define reusable components and layouts. These templates can be combined with content written in Markdown or other formats to generate static HTML pages.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Hugo Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Hugo Website</h1>
  </header>
  <main>
    <p>This is the content of my website.</p>
  </main>
</body>
</html>
```

### Jekyll

```html

<!DOCTYPE html>
<html>
<head>
  <title>My Jekyll Website</title>
</head>
<body>
  <header>
    <h1>Welcome to My Jekyll Website</h1>
  </header>
  <main>
    <p>This is the content of my website.</p>
  </main>
</body>
</html>
```


