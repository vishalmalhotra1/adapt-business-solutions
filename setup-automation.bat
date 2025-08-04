@echo off
echo 🔧 Setting up automated content publishing to start with Windows...
echo.

REM Create a scheduled task that runs at startup and every hour
schtasks /create /tn "CPA Content Automation" /tr "c:\Users\Visha\Code\Webpages\accounting-company\start-automation.bat" /sc onstart /ru "%USERNAME%" /f

if %errorlevel% equ 0 (
    echo ✅ Automation successfully configured!
    echo.
    echo The content system will now:
    echo   • Start automatically when Windows boots
    echo   • Run continuously in the background
    echo   • Publish articles randomly between 9 AM - 5 PM
    echo   • Generate 1 article per day targeting different locations
    echo.
    echo You can check the task in Task Scheduler under "CPA Content Automation"
    echo.
    echo 🚀 Your traffic growth system is now fully automated!
    pause
) else (
    echo ❌ Failed to create scheduled task. Run as Administrator to enable auto-startup.
    echo.
    echo Manual startup: Double-click start-automation.bat
    pause
)
