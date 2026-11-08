# Git rules (mankey-ru.github.io)

- Solo repo: commit and push directly to `main`, no feature branches or PRs.
- A push that changes `index.html`, `assets/css/**` or `assets/images/**` runs
  `.github/workflows/translate-index.yml`: an OpenAI translation into
  `index_ru.html` and a new PDF, committed by CI (pull before the next push).
  Say so before such a push.
