import Page from './page.js';

/** * sub page containing specific selectors and methods for a specific page
 * */

class TransferPage extends Page {

    get inputAmount() {
        return $("//input[@id='amount']");
    }
    get inputFromAccount() {
        return $("//select[@id='fromAccountId']");
    }
    get inputToAccount() {
        return $("//select[@id='toAccountId']");
    }
    get btnTransfer() {
        return $("//input[@value='Transfer']");
    }
    get transferLink() {
        return $("//a[normalize-space()='Transfer Funds']");
    }

    async transferFunds(amount, fromAccount, toAccount) {
        await this.inputAmount.setValue(amount);
        await this.inputFromAccount.selectByVisibleText(fromAccount);
        await this.inputToAccount.selectByVisibleText(toAccount);
        await this.btnTransfer.click();
    }

    async open() {
        return super.open('transfer');
    }

    
}

export default new TransferPage();