const {Given, When, Then}= require('@cucumber/cucumber');

Given('User navigates to {string}', async function (appUrl) {
    console.log(`Navigating to URL: ${appUrl}`);
    await this.page.goto(appUrl);
});