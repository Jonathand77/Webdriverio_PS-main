import { Given, When, Then } from "@wdio/cucumber-framework";

import loanPage from "../pageobjects/loan.page.js";
import { sleep } from "../pageobjects/page.js";


Given(/^I am on the loan request page$/, async () => {
    await sleep(2000);
    await loanPage.open();
    await sleep(2000);

});

When(/^I fill in the loan request form with (.*) and (.*) and (.*)$/, async (amount, downPayment, account) => {
    await loanPage.applyForLoan(amount, downPayment, account);
}
);