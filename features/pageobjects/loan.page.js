import Page from './page.js';

/** * sub page containing specific selectors and methods for a specific page
 * */

class LoanPage extends Page {

    get inputAmount() {
        return $("//input[@id='amount']");
    }

    get inputDownPayment() {
        return $("//input[@id='downPayment']");
    }

    get inputAccount(){
        return $("//select[@id='fromAccountId']");
    }

    get btnCalculate() {
        return $("//input[@value='Apply Now']");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to apply for a loan using amount, down payment and account
     */
    async applyForLoan(amount, downPayment, account) {
        await this.inputAmount.setValue(amount);
        await this.inputDownPayment.setValue(downPayment);
        await this.inputAccount.selectByVisibleText(account);
        await this.btnCalculate.click();
    }

    async open() {
        return super.open('requestloan');
    }

}

export default new LoanPage();