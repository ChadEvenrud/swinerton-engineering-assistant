# Contributing

This repo is the shared workspace. Two kinds of work land here: the Engineering Assistant app, and weekly challenge submissions.

## Rules

- Do not push to `main`.
- One pull request per feature or per weekly challenge.
- Do not edit another person's folder under `submissions/`.
- Never commit `.env` files, API keys, or passwords.

## Weekly challenges

1. Create a branch: `challenge/week-01-yourname`
2. Copy `submissions/week-NN/TEMPLATE.md` to `submissions/week-NN/<your-github-username>/README.md`
3. Add diagrams, screenshots, or lab code in that same folder
4. Open a pull request titled `Week N: yourname`
5. Ask a teammate to review

## Product work

Use `feature/short-description` branches. Touch `frontend/`, `backend/`, `agent/`, `messaging/`, or `tests/`. Keep secrets in GitHub Actions secrets and local `.env` files.

## Review

A second teammate should look at the PR before merge. For weekly work, check that the folder name matches the GitHub username and that the template questions are answered.
