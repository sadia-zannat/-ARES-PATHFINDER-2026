@echo off
setlocal
cd /d "%~dp0SOURCE_CURRENT"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 serve.py --offline --open-browser --presenter
  goto done
)
where python >nul 2>nul
if %errorlevel%==0 (
  python serve.py --offline --open-browser --presenter
  goto done
)
echo Python 3 required. Install Python from python.org and enable PATH.
:done
pause
