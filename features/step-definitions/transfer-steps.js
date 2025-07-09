import { Given, When, Then } from "@wdio/cucumber-framework";
import transferPage from '../pageobjects/transfer.page.js';
import { sleep } from "../pageobjects/page.js";


Given('I am on the transfer page', async () => {
    await sleep(2000);
    await transferPage.open();
    await sleep(2000);
});

When(/^I fill in the transfer form with (.*) and (.*) and (.*)$/, async (amount, fromAccount, toAccount) => {
    await transferPage.transferFunds(amount, fromAccount, toAccount);
});

Then(/^I should see the transfer result saying (.*) from (.*) to (.*)$/, async (amount, fromAccount, toAccount) => {
    const expectedMessage = `$${amount}.00 has been transferred from account #${fromAccount} to account #${toAccount}.`;
    const result = await $("//div[@id='showResult']//p[1]");
    await expect(result).toBeDisplayed();
    await expect(result).toHaveText(expectedMessage);
});
