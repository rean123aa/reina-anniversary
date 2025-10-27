@echo off
REM =========================
REM Push Anniversary Site to GitHub / Render
REM =========================

REM Change to your project folder
cd /d "C:\Users\hjnuioi\Desktop\reina-anniversary"

REM Stage all changes
git add .

REM Commit changes with timestamp
git commit -m "Auto-update: %date% %time%"

REM Push to GitHub
git push origin main

echo Done! Your files have been pushed. Render should redeploy automatically.
pause
