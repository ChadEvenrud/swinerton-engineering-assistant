# Week 1 — GitHub Fundamentals

Learn how the team shares work: clone, branch, commit, push, pull request, review. Later labs use this same path.

## Topics

Repository, clone, working tree, staging, commit, branch, remote, push, pull, pull request, review, merge, conflicts.

## Required exercise

1. Clone the team repository.
2. Create a branch: `challenge/week-01-yourname`
3. Copy `submissions/week-01/TEMPLATE.md` to `submissions/week-01/<your-github-username>/README.md`
4. Commit, push, and open a pull request titled `Week 1: yourname`
5. Review a teammate’s pull request

Do not push to `main`.

```bash
git clone https://github.com/ChadEvenrud/swinerton-engineering-assistant.git
cd swinerton-engineering-assistant
git checkout -b challenge/week-01-yourname
git add submissions/week-01/your-github-username
git commit -m "Submit week 1 GitHub challenge"
git push -u origin challenge/week-01-yourname
```

Curriculum: https://chadevenrud.github.io/swinerton-engineering-hackathon/github.html
