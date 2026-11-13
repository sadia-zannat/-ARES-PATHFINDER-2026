@echo off
setlocal
cd /d "%~dp0SOURCE_CURRENT\viewer"
call npm ci
if errorlevel 1 goto done
call npm run build
:done
pause
