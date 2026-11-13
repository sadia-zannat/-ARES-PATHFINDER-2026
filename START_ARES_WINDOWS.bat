@echo off
setlocal
cd /d "%~dp0SOURCE_CURRENT"
where py >nul 2>nul
if %errorlevel%==0 (
  py -3 serve.py --open-browser
  goto done
)
where python >nul 2>nul
if %errorlevel%==0 (
  python serve.py --open-browser
  goto done
)
echo Python 3 is required to run the included offline build.
echo Install Python from https://www.python.org/downloads/windows/ and tick Add Python to PATH.
echo Then double click this file again.
:done
pause
