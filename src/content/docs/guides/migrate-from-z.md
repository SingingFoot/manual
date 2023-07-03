---
title: Migrate your project documentation from GoogleDocs
---

Migrating project documentation from Google Docs to a static website generator like **Astro** or **Docusaurus** can bring numerous benefits, including improved version control, enhanced collaboration, and a more professional and organized presentation of your documentation. In this guide, we will explore the steps involved in migrating project documentation from Google Docs to Astro or Docusaurus, along with code examples to help you through the process.

## Step 1: Exporting from Google Docs

The first step is to export your documentation from Google Docs. Google Docs provides several export options, including HTML and Markdown. To export as HTML, go to the "File" menu, select "Download", and choose "Web Page (.html, zipped)". This will download a .zip file containing the HTML version of your document. If you prefer Markdown, select "File", "Download", and choose "Markdown (.md)".

## Step 2: Setting Up the Static Site Generator

Next, you'll need to set up the static site generator of your choice, Astro or Docusaurus. Here are the steps for each:

**Astro:**

Install Astro globally by running the following command in your terminal:

```js
npm install -g astro
```

Create a new Astro project by running:

```js
npx create-astro my-project
```
Navigate to the project directory:

```js
cd my-project
```
**Docusaurus:**

Install Docusaurus globally by running:

```js
npm install -g docusaurus
```
Create a new Docusaurus project:

```js
npx docusaurus-init my-project classic
```
Move into the project directory:

```js
cd my-project
```

## Step 3: Organizing the Project Structure

Now, it's time to organize your project structure. Both Astro and Docusaurus have specific folder structures for documentation. For Astro, you'll typically place your documentation files inside the src/pages directory. In Docusaurus, the documentation files reside in the docs directory. You can create subdirectories to organize your files further.

## Step 4: Converting the Exported Files

Since Google Docs exports as HTML or Markdown, you'll need to convert these files to the format required by Astro or Docusaurus.

**Astro:**
Astro supports both HTML and Markdown files. To convert HTML files, you can directly copy the content into Astro's .astro files, which support HTML syntax. For Markdown files, create new .md files in the appropriate Astro directory and copy the Markdown content into those files.

**Docusaurus:**

Docusaurus uses Markdown files for documentation. To convert HTML files, you can use a Markdown converter like turndown or manually convert the content into Markdown syntax. Create new .md files in the docs directory and paste the converted Markdown content into them.

## Step 5: Linking and Formatting

Once the content is converted, you may need to make some adjustments to the links and formatting. For example, in Astro, you can use standard HTML anchor tags `(<a>)` to link between pages or sections. In Docusaurus, you can use Markdown's link syntax `([link text](url))`. Additionally, you might want to apply styles or add custom components to improve the presentation of your documentation.

## Step 6: Running the Development Server

To preview your migrated documentation, you need to run the development server for your chosen static site generator.

**Astro:**

In the Astro project directory, run the following command:

```js
npm run dev
```
**Docusaurus:**

In the Docusaurus project directory, run:

```js
npm start
```
## Step 7: Building and Deploying

Finally, when you're satisfied with the migrated documentation, you can build and deploy it to a static web hosting platform.

**Astro:**
To build your Astro project, run the following command:

```js
npm run build
```

The built files will be generated in the dist directory, which you can then deploy to a hosting platform of your choice.

**Docusaurus:**

For Docusaurus, use the following command to build the project:

```js
npm run build
```

The built files will be located in the build directory, ready to be deployed to your preferred hosting platform.

By following these steps and adapting the code examples to your specific project, you can successfully migrate your project documentation from Google Docs to Astro or Docusaurus. Enjoy the benefits of a more structured and professional documentation website!