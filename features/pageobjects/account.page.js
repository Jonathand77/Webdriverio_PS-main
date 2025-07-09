import Page from './page.js';

/** * sub page containing specific selectors and methods for a specific page
 * */

class AccountPage extends Page {

    accountNumberLink(accountNumber) {
        return $(`//a[normalize-space()='${accountNumber}']`);
    }

    async open() {
        return super.open('overview');
    }

    async selectAccount(accountNumber) {
        const accountLink = this.accountNumberLink(accountNumber);
        await accountLink.waitForDisplayed();
        await accountLink.click();
    }
}

export default new AccountPage();