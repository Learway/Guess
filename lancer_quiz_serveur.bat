@echo off
cd /d %~dp0
start http://localhost:8000/quiz_facile.html
python -m http.server 8000
pause