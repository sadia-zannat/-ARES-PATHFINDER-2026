@echo off
setlocal
cd /d "%~dp0viewer"
echo ARES PATHFINDER - LOCAL OFFLINE BUILD
echo.
echo A dedicated port 5186 is used so an older Vite game on 5173 cannot be opened by mistake.
echo.
where py >nul 2>&1
if %errorlevel%==0 (
 start "ARES_PATHFINDER_LOCAL_SERVER" /min py -m http.server 5186 --bind 127.0.0.1
) else (
 where python >nul 2>&1
 if %errorlevel% neq 0 (echo ERROR: Python not found. & pause & exit /b 1)
 start "ARES_PATHFINDER_LOCAL_SERVER" /min python -m http.server 5186 --bind 127.0.0.1
)
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:5186/"
echo Open http://127.0.0.1:5186/ if Chrome did not open.
echo You can close this window. A separate minimized window keeps the local server running.
pause
