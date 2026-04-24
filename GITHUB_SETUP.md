# GitHub Setup — BuildFlow Kanban

Run these commands **one by one** in your terminal, from the project folder.

---

## 1. Open the project folder in terminal

```bash
cd /Users/er0sv/Documents/TP6_WEB
```

---

## 2. Remove the existing remote origin

```bash
git remote remove origin
```

> This clears the old remote (`TP6WEB2_DemoProject`) so you can link a fresh repository.

---

## 3. Create a new repository on GitHub

Go to **https://github.com/new** and create a repository named:

```
TP6WEB2_Kanban
```

Leave it **empty** (no README, no .gitignore). Then copy the SSH URL shown — it will look like:

```
git@github.com:<your-username>/TP6WEB2_Kanban.git
```

---

## 4. Link the local repo to the new GitHub repository

```bash
git remote add origin git@github.com:ibrahim-nazarii/TP6WEB2_Kanban.git
```

> Replace `<your-username>` with your actual GitHub username.

---

## 5. Rename the default branch to main

```bash
git branch -M main
```

---

## 6. Stage all project files

```bash
git add .
```

---

## 7. Create the initial commit

```bash
git commit -m "feat: initial BuildFlow Kanban app - Vue3 frontend + Express backend"
```

---

## 8. Create your working branch (as required by the TP)

```bash
git checkout -b partie1-kanban-initial
```

---

## 9. Push everything to GitHub

```bash
git push -u origin partie1-kanban-initial
```

---

## Verify

After the push, your code will be live at:

```
https://github.com/<your-username>/TP6WEB2_Kanban
```

Check that the branch `partie1-kanban-initial` appears on GitHub with all your files.

---

## Useful commands during the session

| Action        | Command                                  |
| ------------- | ---------------------------------------- |
| Check status  | `git status`                             |
| Stage changes | `git add .`                              |
| Commit        | `git commit -m "message clair"`          |
| Push updates  | `git push origin partie1-kanban-initial` |
| Pull latest   | `git pull origin partie1-kanban-initial` |
