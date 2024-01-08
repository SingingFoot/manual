---
title: How to install and run "Manual"
description: A chain of terminal commands to run "Manual" Astro theme on your computer.
published: 2023-06-18
---

### Clone the repository

This command will clone your repository.

```js
git clone https://github.com/TheOtterlord/manual
```

### Navigate to the directory

```js
cd manual
```

### Install dependencies

```js
npm install
```

### Start the dev server

```js
npm run dev
```

### Stop the dev server

```js
Control + C
```

### Delete original git folder and initialize your own repository

Press "Command" + "Shift" + "." to view hidden folders. Delete original .git folder.

```js
git init
```
### Add a local repository to GitHub using Git

Create a new repository on GitHub and copy its URL, which is <REMOTE_URL>.

```
git remote add origin <REMOTE_URL>
```
Verify the new remote

```
git remote -v
```
Pushes the changes in your local repository up to the remote repository you specified as the origin

```
git push -u origin main
```

### Publish your website on Netlify

Create a free account at Netlify if you do not already have one.

Make a note of your username. You will view your dashboard and any sites you create at https://app.netlify.com/teams/username

Click Add new site > Import an existing project.

You will be asked to connect to a Git provider. Choose GitHub and follow the steps onscreen to authenticate your GitHub account. Then, choose your Astro project’s GitHub repository from the list provided.

At the final step, Netlify will show you your app’s site settings. The defaults should be correct for your Astro project, so you can scroll down and click **Deploy site**.

