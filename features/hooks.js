const { BeforeAll, BeforeStep, Before, After, AfterAll, AfterStep, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, webkit, firefox } = require('playwright');

setDefaultTimeout(60 * 1000);
let browser, context, page;

BeforeAll(async function () {
    console.log("********** Before All Hook **********");
});

BeforeStep(async function (step) {
    console.log(`--- Before Step: ${step.pickleStep.text} ---`);

});

Before(async function (scenario) {
    console.log(`*** Before Scenario: ${scenario.pickle.name} ***`);
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    this.context = context;
    this.page = page;
});

After(async function (scenario) {
    console.log(`*** After Scenario: ${scenario.pickle.name} ***`);
    await this.context.close();
    await browser.close();
});

AfterStep(async function ({result}) {
    if (result.status === Status.FAILED) {
        this.attach(`Step failed with error: ${result.exception}`);
        const filePath = `reports/screenshots/failed${Date.now()}.png`;
        const failedScreenshot = await this.page.screenshot({ path: filePath });
        this.attach(failedScreenshot, 'image/png');
    }
});

AfterAll(async function () {
    console.log("********** After All Hook **********");

});