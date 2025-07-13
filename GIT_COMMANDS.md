# Git Commands for Portfolio Deployment

## After installing Git, run these commands in order:

# 1. Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Add all files to staging
git add .

# 3. Commit changes
git commit -m "Initial commit: Dark theme developer portfolio"

# 4. Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/portfolio.git

# 5. Push to GitHub
git push -u origin main

## Notes:
- Replace "yourusername" with your actual GitHub username
- Create a new repository on GitHub first at https://github.com/new
- If the default branch is "master" instead of "main", use:
  git branch -M main
  git push -u origin main
