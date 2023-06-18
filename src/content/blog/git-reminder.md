---
title: Git Reminder
description: A chain of terminal commands to use Git.
published: 2023-06-18
---

### Initialize a repository

To initialize an existing repository enter the following command inside the repository.

```
git init
```

To create a new folder and initialize a new repository inside it enter the following command into the terminal. The new folder will be created inside the current folder.

```
git init <new folder name>
```

### Check the current status of your repository

Get a list of all the files inside your repository

```
ls
```

Get a level up from your repository

```
cd ..
```

Check the status of your repository

```
git status
```

### Unstage files or discard changes

To unstage a file:

```
git reset HEAD <file_name>
```
or
```
git restore --staged <file-name>
```

To discard changes:

```
git restore <file_name>
```
or
```
git checkout --<file_name>
```

### Rename or move files

Rename a file in Git:

```
git mv <old_file_name> <new_file_name>
```

Move a file in other folder.

**⚠ NOTE: File and folder must be in one folder.** 

```
git mv <file_name> <target_folder_name>
```

### Create file

Create an empty file

```
touch <file_name>
```

Create a file with some text inside

```
echo <text> >> <file_name>
```

### Delete a file or a folder

Delete a file

```
rm <file_name>
```

Delete a folder

```
rm -rf <folder_name>
```

### Get the story of your commits

```
git log
```

To get all the commits story in one line:

```
git log --oneline
```

To exit from the **Story of commits** mode press "q". 

To get all the commits of a specific file:

```
git log --<file_name>
```

### Find difference between commits

Find difference between an arbitrary and the last commit:

```
git diff <arbitrary_commit_number> HEAD
```




