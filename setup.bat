@echo off
setlocal EnableDelayedExpansion

:: ============================================================
::  Gift Web - Windows Environment Setup
:: ============================================================

title Gift Web - Auto Setup

:: ── ANSI Color Setup ───────────────────────────────────────
for /f %%a in ('powershell -NoProfile -Command "[char]27"') do set "ESC=%%a"

set "R=!ESC![0m"
set "RED=!ESC![91m"
set "GRN=!ESC![92m"
set "YLW=!ESC![93m"
set "BLU=!ESC![94m"
set "MAG=!ESC![95m"
set "CYN=!ESC![96m"
set "WHT=!ESC![97m"
set "GRY=!ESC![90m"
set "B=!ESC![1m"

:: ── Banner ─────────────────────────────────────────────────
cls
echo.
echo   !CYN!!B!===================================================!R!
echo.
echo          !MAG!!B!G I F T   W E B!R!
echo.
echo          !WHT!!B!Environment Setup v1.0!R!    !GRY!Windows!R!
echo.
echo   !CYN!!B!===================================================!R!
echo.

:: ── Check Administrator ────────────────────────────────────
net session >nul 2>&1
if %errorlevel% equ 0 goto :IS_ADMIN

echo   !YLW!!B! WARN !R! !WHT!Script requires Administrator privileges!R!
echo   !BLU!!B! INFO !R! !WHT!Requesting elevation...!R!
echo.

set "_WRAPPER=%TEMP%\gift_web_wrapper.bat"
>"!_WRAPPER!" echo @echo off
>>"!_WRAPPER!" echo cd /d "%~dp0"
>>"!_WRAPPER!" echo call "%~f0"
>>"!_WRAPPER!" echo pause

set "_VBS=%TEMP%\gift_web_elevate.vbs"
>"!_VBS!" echo Set oShell = CreateObject^("Shell.Application"^)
>>"!_VBS!" echo oShell.ShellExecute "cmd.exe", "/k ""!_WRAPPER!""", "", "runas", 1

cscript //nologo "!_VBS!"
del /f "!_VBS!" >nul 2>&1

echo   !GRY!Admin window opened. This window will close...!R!
timeout /t 2 /nobreak >nul
exit /b 0

:: ════════════════════════════════════════════════════════════
:IS_ADMIN
:: ════════════════════════════════════════════════════════════
cd /d "%~dp0"
echo   !GRN! + !R!  !WHT!Running as !GRN!!B!Administrator!R!
echo   !BLU! i !R!  !GRY!OS: Windows  Dir: %~dp0!R!
echo.

:: ════════════════════════════════════════════════════════════
::  STEP 1: GIT
:: ════════════════════════════════════════════════════════════
echo   !CYN!!B!+----------------------------------------------+!R!
echo   !CYN!!B!^|!R!  !WHT!!B! STEP 1 !R!  !CYN!Checking Git!R!                       !CYN!!B!^|!R!
echo   !CYN!!B!+----------------------------------------------+!R!
echo.

where git >nul 2>&1
if !errorlevel! equ 0 goto :GIT_FOUND

echo   !YLW! * !R!  !WHT!Git is not installed!R!

where winget >nul 2>&1
if !errorlevel! neq 0 goto :GIT_DOWNLOAD

echo   !BLU! v !R!  !GRY!Installing Git via winget...!R!
winget install --id Git.Git -e --accept-source-agreements --accept-package-agreements --silent
echo   !GRN! + !R!  !WHT!Git installed successfully!R!
goto :GIT_DONE

:GIT_DOWNLOAD
echo   !BLU! v !R!  !GRY!Downloading Git installer...!R!
set "GIT_INSTALLER=%TEMP%\git-installer.exe"
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object Net.WebClient).DownloadFile('https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe', '!GIT_INSTALLER!')"

if not exist "!GIT_INSTALLER!" goto :GIT_SKIP

echo   !BLU! ~ !R!  !GRY!Installing Git silently...!R!
"!GIT_INSTALLER!" /VERYSILENT /NORESTART /NOCANCEL /SP- /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS
del /f "!GIT_INSTALLER!" >nul 2>&1
echo   !GRN! + !R!  !WHT!Git installed successfully!R!
goto :GIT_DONE

:GIT_SKIP
echo   !YLW! ! !R!  !YLW!Cannot download Git. Skipping...!R!
goto :GIT_DONE

:GIT_FOUND
for /f "tokens=*" %%v in ('git --version') do echo   !GRN! + !R!  !WHT!%%v!R! !GRY!- ready!R!

:GIT_DONE
echo.

:: ════════════════════════════════════════════════════════════
::  STEP 2: NODE.JS
:: ════════════════════════════════════════════════════════════
echo   !CYN!!B!+----------------------------------------------+!R!
echo   !CYN!!B!^|!R!  !WHT!!B! STEP 2 !R!  !CYN!Checking Node.js!R!                   !CYN!!B!^|!R!
echo   !CYN!!B!+----------------------------------------------+!R!
echo.

set "PATH=C:\Program Files\nodejs;C:\Program Files\Git\cmd;%PATH%"

where node >nul 2>&1
if !errorlevel! equ 0 goto :NODE_FOUND

echo   !YLW! * !R!  !WHT!Node.js is not installed!R!

where winget >nul 2>&1
if !errorlevel! neq 0 goto :NODE_DOWNLOAD

echo   !BLU! v !R!  !GRY!Installing Node.js LTS via winget...!R!
winget install --id OpenJS.NodeJS.LTS -e --accept-source-agreements --accept-package-agreements --silent
goto :NODE_VERIFY

:NODE_DOWNLOAD
echo   !BLU! v !R!  !GRY!Downloading Node.js v20 LTS...!R!
set "NODE_MSI=%TEMP%\node-lts-installer.msi"
set "NODE_URL=https://nodejs.org/dist/v20.19.0/node-v20.19.0-x64.msi"

powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; (New-Object Net.WebClient).DownloadFile('!NODE_URL!', '!NODE_MSI!')"

if not exist "!NODE_MSI!" goto :NODE_FAIL

echo   !BLU! ~ !R!  !GRY!Installing Node.js silently...!R!
msiexec /i "!NODE_MSI!" /qn /norestart ADDLOCAL=ALL

if !errorlevel! neq 0 msiexec /i "!NODE_MSI!" /qb /norestart ADDLOCAL=ALL

del /f "!NODE_MSI!" >nul 2>&1
echo   !GRN! + !R!  !WHT!Node.js installed successfully!R!
goto :NODE_VERIFY

:NODE_FAIL
echo   !RED! x !R!  !RED!!B!Cannot download Node.js!!R!
echo   !GRY!     Download manually at: https://nodejs.org!R!
pause
exit /b 1

:NODE_FOUND
for /f "tokens=*" %%v in ('node -v') do echo   !GRN! + !R!  !WHT!Node.js %%v!R! !GRY!- ready!R!
goto :NODE_DONE

:NODE_VERIFY
echo   !BLU! ~ !R!  !GRY!Updating Environment Variables...!R!

set "NODE_PATH=C:\Program Files\nodejs"
set "NPM_GLOBAL=%APPDATA%\npm"
set "GIT_PATH=C:\Program Files\Git\cmd"

set "PATH=!NODE_PATH!;!NPM_GLOBAL!;!GIT_PATH!;%PATH%"

:: Add to System PATH permanently
powershell -NoProfile -Command ^
  "$paths = @('%NODE_PATH%','%NPM_GLOBAL%','%GIT_PATH%');" ^
  "$mp = [Environment]::GetEnvironmentVariable('Path','Machine');" ^
  "$ch = $false;" ^
  "foreach($p in $paths){" ^
  "  if($mp -notlike \"*$p*\"){" ^
  "    $mp = $mp.TrimEnd(';') + ';' + $p;" ^
  "    $ch = $true" ^
  "  }" ^
  "}" ^
  "if($ch){" ^
  "  [Environment]::SetEnvironmentVariable('Path',$mp,'Machine')" ^
  "}"

echo   !GRN! + !R!  !WHT!System PATH updated!R!

:: Reload PATH from Registry
for /f "tokens=2*" %%a in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do set "SYS_PATH=%%b"
for /f "tokens=2*" %%a in ('reg query "HKCU\Environment" /v Path 2^>nul') do set "USR_PATH=%%b"
set "PATH=!SYS_PATH!;!USR_PATH!"

where node >nul 2>&1
if !errorlevel! equ 0 goto :NODE_VERIFY_OK

if exist "!NODE_PATH!\node.exe" (
    set "PATH=!NODE_PATH!;!NPM_GLOBAL!;%PATH%"
    goto :NODE_DONE
)

echo   !RED! x !R!  !RED!PATH not updated. Please restart CMD and run again.!R!
pause
exit /b 0

:NODE_VERIFY_OK
for /f "tokens=*" %%v in ('node -v') do echo   !GRN! + !R!  !WHT!Node.js %%v!R! !GRY!- ready!R!

:NODE_DONE
echo.

:: ════════════════════════════════════════════════════════════
::  STEP 3: NPM
:: ════════════════════════════════════════════════════════════
echo   !CYN!!B!+----------------------------------------------+!R!
echo   !CYN!!B!^|!R!  !WHT!!B! STEP 3 !R!  !CYN!Checking npm!R!                       !CYN!!B!^|!R!
echo   !CYN!!B!+----------------------------------------------+!R!
echo.

set "PATH=C:\Program Files\nodejs;%APPDATA%\npm;%PATH%"

where npm >nul 2>&1
if !errorlevel! neq 0 goto :NPM_FAIL

for /f "tokens=*" %%v in ('npm -v') do echo   !GRN! + !R!  !WHT!npm %%v!R! !GRY!- ready!R!
goto :NPM_DONE

:NPM_FAIL
echo   !RED! x !R!  !RED!!B!npm not found!!R!
pause
exit /b 1

:NPM_DONE
echo.

:: ════════════════════════════════════════════════════════════
::  STEP 4: PROJECT DEPENDENCIES
:: ════════════════════════════════════════════════════════════
echo   !CYN!!B!+----------------------------------------------+!R!
echo   !CYN!!B!^|!R!  !WHT!!B! STEP 4 !R!  !CYN!Install project dependencies!R!       !CYN!!B!^|!R!
echo   !CYN!!B!+----------------------------------------------+!R!
echo.

cd /d "%~dp0"

if not exist "package.json" goto :PKG_FAIL

echo   !BLU! v !R!  !GRY!Running npm install...!R!
echo.
call npm install
if !errorlevel! neq 0 goto :NPM_RETRY
goto :PKG_OK

:NPM_RETRY
echo.
echo   !YLW! ! !R!  !YLW!npm install failed! Retrying...!R!
if exist "node_modules" rmdir /s /q node_modules
if exist "package-lock.json" del /f package-lock.json
call npm install
goto :PKG_OK

:PKG_FAIL
echo   !RED! x !R!  !RED!package.json not found!R!
pause
exit /b 1

:PKG_OK
echo.
echo   !GRN! + !R!  !WHT!All dependencies installed!R!
echo.

:: ════════════════════════════════════════════════════════════
::  SUMMARY
:: ════════════════════════════════════════════════════════════
for /f "tokens=*" %%v in ('node -v') do set FINAL_NODE=%%v
for /f "tokens=*" %%v in ('npm -v') do set FINAL_NPM=%%v

echo   !GRN!!B!+----------------------------------------------+!R!
echo   !GRN!!B!^|!R!                                              !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!    !WHT!!B!Setup completed successfully!!R!          !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!                                              !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!    !GRY!Node.js  !R!!WHT!!B!!FINAL_NODE!!R!                        !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!    !GRY!npm      !R!!WHT!!B!!FINAL_NPM!!R!                          !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!    !GRY!OS       !R!!WHT!!B!Windows!R!                        !GRN!!B!^|!R!
echo   !GRN!!B!^|!R!                                              !GRN!!B!^|!R!
echo   !GRN!!B!+----------------------------------------------+!R!
echo.

:: ════════════════════════════════════════════════════════════
::  MENU
:: ════════════════════════════════════════════════════════════
:MENU
echo   !CYN!!B! What would you like to do next? !R!
echo.
echo     !WHT!!B!1!R!  !CYN!npm run dev  !R!    !GRY!-  Start development server!R!
echo     !WHT!!B!2!R!  !CYN!npm run build!R!    !GRY!-  Build for production!R!
echo     !WHT!!B!3!R!  !CYN!npm run start!R!    !GRY!-  Start production server!R!
echo     !WHT!!B!4!R!  !CYN!npm run lint !R!    !GRY!-  Run code linter!R!
echo     !WHT!!B!0!R!  !GRY!Exit!R!
echo.
echo   !GRY!----------------------------------------------!R!
echo.

set /p "CHOICE=  !WHT!!B!Enter choice [0-4]: !R!"

if "!CHOICE!"=="1" goto :RUN_DEV
if "!CHOICE!"=="2" goto :RUN_BUILD
if "!CHOICE!"=="3" goto :RUN_START
if "!CHOICE!"=="4" goto :RUN_LINT
if "!CHOICE!"=="0" goto :EXIT
echo   !YLW! ! !R!  !YLW!Invalid choice. Try again...!R!
echo.
goto :MENU

:RUN_DEV
echo.
echo   !BLU! ~ !R!  !WHT!Running !CYN!!B!npm run dev!R! ...!R!
echo   !GRY!     Press Ctrl+C to stop server!R!
echo.
call npm run dev
goto :AFTER_RUN

:RUN_BUILD
echo.
echo   !BLU! ~ !R!  !WHT!Running !CYN!!B!npm run build!R! ...!R!
echo.
call npm run build
goto :AFTER_RUN

:RUN_START
echo.
echo   !BLU! ~ !R!  !WHT!Running !CYN!!B!npm run start!R! ...!R!
echo   !GRY!     Press Ctrl+C to stop server!R!
echo.
call npm run start
goto :AFTER_RUN

:RUN_LINT
echo.
echo   !BLU! ~ !R!  !WHT!Running !CYN!!B!npm run lint!R! ...!R!
echo.
call npm run lint
goto :AFTER_RUN

:AFTER_RUN
echo.
echo   !GRN! + !R!  !WHT!Done!!R!
echo.
goto :MENU

:EXIT
echo.
echo   !GRY!Goodbye!!R!
echo.
exit /b 0
