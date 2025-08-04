@echo off
title CPA Content Automation System
echo 🚀 Starting Automated Content Generation System...
echo.
echo This will run continuously and publish articles at random times
echo between 9 AM - 5 PM, Monday through Friday.
echo.
echo Press Ctrl+C to stop the automation.
echo.

cd /d "c:\Users\Visha\Code\Webpages\accounting-company\content-generator"
node daily-publisher.js start-automation
