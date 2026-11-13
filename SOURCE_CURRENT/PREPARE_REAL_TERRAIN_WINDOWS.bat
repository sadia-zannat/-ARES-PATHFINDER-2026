@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>&1
if errorlevel 1 (
 echo ERROR: Python Launcher missing. Install Python 3.12.
 pause
 exit /b 1
)
if not exist ".venv\Scripts\python.exe" (
 py -3.12 -m venv .venv
 if errorlevel 1 py -m venv .venv
)
".venv\Scripts\python.exe" -m pip install -r requirements.txt
if errorlevel 1 (
 echo ERROR: Python packages failed.
 pause
 exit /b 1
)
".venv\Scripts\python.exe" process_real_terrain.py --downloads "%USERPROFILE%\Downloads" --output "viewer\public\terrain" --tile-m 256 --tiles-side 4 --tex-px 512
if errorlevel 1 (
 echo ERROR: Read error or data not found. See console output.
 pause
 exit /b 1
)
echo.
echo TERRAIN PREP COMPLETE. Now run START_VIEWER_WINDOWS.bat
pause
