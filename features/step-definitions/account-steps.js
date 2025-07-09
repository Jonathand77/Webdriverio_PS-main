import { When, Then } from "@wdio/cucumber-framework";

import accountPage from "../pageobjects/account.page.js";
import { sleep } from "../pageobjects/page.js";

When(/^I navigate to the accounts page$/, async () => {
    await sleep(2000);
    await accountPage.open();
    await sleep(2000);
});

When(/^I click on the account (.*)$/, async (accountNumber) => {
    await accountPage.selectAccount(accountNumber);
});