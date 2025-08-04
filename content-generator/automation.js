// Simple automation script for content publishing
const cron = require('node-cron');
const { exec } = require('child_process');
const path = require('path');

console.log('🚀 Starting CPA Content Automation System...');
console.log('📅 Will generate content daily at 6:00 AM');
console.log('⏰ Will check for publishing every 15 minutes during business hours');
console.log('💡 Press Ctrl+C to stop\n');

// Generate daily content at 6:00 AM, Monday-Friday
cron.schedule('0 6 * * 1-5', () => {
  console.log('📝 Generating daily content...');
  exec('node daily-publisher.js generate-daily', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Content generation error:', error);
      return;
    }
    console.log('✅ Daily content generated:', stdout);
  });
}, {
  timezone: "America/Toronto"
});

// Check for articles to publish every 15 minutes during business hours
cron.schedule('*/15 9-17 * * 1-5', () => {
  console.log('🔍 Checking for articles to publish...');
  exec('node daily-publisher.js check-publish', { cwd: __dirname }, (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Publishing check error:', error);
      return;
    }
    if (stdout.trim()) {
      console.log('📢 Publishing result:', stdout);
    }
  });
}, {
  timezone: "America/Toronto"
});

// Test generation immediately
console.log('🧪 Running initial test...');
exec('node daily-publisher.js generate-daily', { cwd: __dirname }, (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Initial test failed:', error);
    console.log('📋 Available commands:');
    console.log('  node daily-publisher.js generate-daily');
    console.log('  node daily-publisher.js publish-now');
    return;
  }
  console.log('✅ Initial test passed:', stdout);
});

// Keep the process running
process.on('SIGINT', () => {
  console.log('\n🛑 Automation stopped by user');
  process.exit(0);
});

console.log('✅ Automation system is running...');
