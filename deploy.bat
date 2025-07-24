@echo off
echo ======================================
echo    PORTFOLIO DEPLOYMENT SCRIPT
echo ======================================

echo.
echo [1/5] Building the project...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo [2/5] Checking dist folder...
if not exist "dist" (
    echo ERROR: dist folder not found!
    pause
    exit /b 1
)

echo.
echo [3/5] Ensuring .nojekyll file exists...
if not exist "dist\.nojekyll" (
    echo. > "dist\.nojekyll"
    echo Created .nojekyll file
)

echo.
echo [4/5] Deploying to GitHub Pages...
call npm run deploy
if errorlevel 1 (
    echo WARNING: npm deploy failed, trying git commands...
    
    echo Adding files to git...
    git add .
    git commit -m "🚀 Deploy portfolio to GitHub Pages"
    git push origin main
    
    if errorlevel 1 (
        echo ERROR: Git push failed!
        pause
        exit /b 1
    )
)

echo.
echo [5/5] Testing local preview...
echo Starting preview server at http://localhost:4173
echo You can also manually deploy by pushing to main branch
echo.
echo ======================================
echo    DEPLOYMENT COMPLETED!
echo ======================================
echo.
echo Your portfolio should be available at:
echo https://rohan911438.github.io/PORTFOLIO/
echo.
echo If it's still not working, check:
echo 1. GitHub Pages settings in repository
echo 2. Wait 5-10 minutes for GitHub Pages to update
echo 3. Clear browser cache and try again
echo.
pause
