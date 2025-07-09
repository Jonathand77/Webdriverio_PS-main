import { Given, When, Then } from "@wdio/cucumber-framework";
import paymentPage from "../pageobjects/payment.page.js";
import { sleep } from "../pageobjects/page.js";

Given(/^I am on the payment page$/, async () => {
    // Ensure the payment page is opened before filling the form
    await sleep(2000); // Wait for 5 second to ensure the page is loaded
    await paymentPage.open();
    await sleep(2000); // Wait for 5 seconds to ensure the page is fully loaded
});

When(/^I fill in the payment form with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/,
    async (payeeName, address, city, state, zipCode, phone, account, verifyAccount, amount, fromAccount) => {
        await paymentPage.makePayment(payeeName, address, city, state, zipCode, phone, account, verifyAccount, amount, fromAccount);
    }
);

Then(/^I should see the payment result including (.*) and (.*) and (.*)$/, async (payeeName, amount, fromAccount) => {
    const expectedMessage = `Bill Payment to ${payeeName} in the amount of $${amount}.00 from account ${fromAccount} was successful.`;
    const result = await $("//p[contains(text(),'Bill Payment to')]");
    await expect(result).toBeDisplayed();
    await expect(result).toHaveText(expectedMessage);
});