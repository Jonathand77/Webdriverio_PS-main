import Page from './page.js';

class PaymentPage extends Page {

    get inputPayeeName() {
        return $("//input[@name='payee.name']");
    }

    get inputAddress() {
        return $("//input[@name='payee.address.street']");
    }

    get inputCity() {
        return $("//input[@name='payee.address.city']");
    }

    get inputState() {
        return $("//input[@name='payee.address.state']");
    }

    get inputZipCode() {
        return $("//input[@name='payee.address.zipCode']");
    }

    get inputPhone() {
        return $("//input[@name='payee.phoneNumber']");
    }

    get inputAccount() {
        return $("//input[@name='payee.accountNumber']");
    }

    get inputVerifyAccount() {
        return $("//input[@name='verifyAccount']");
    }

    get inputAmount() {
        return $("//input[@name='amount']");
    }

    get selectFromAccount() {
        return $("//select[@name='fromAccountId']");
    }

    get btnPay() {
        return $("//input[@value='Send Payment']");
    }

    async makePayment(payeeName, address, city, state, zipCode, phone, account, verifyAccount, amount, fromAccount) {
        await this.inputPayeeName.setValue(payeeName);
        await this.inputAddress.setValue(address);
        await this.inputCity.setValue(city);
        await this.inputState.setValue(state);
        await this.inputZipCode.setValue(zipCode);
        await this.inputPhone.setValue(phone);
        await this.inputAccount.setValue(account);
        await this.inputVerifyAccount.setValue(verifyAccount);
        await this.inputAmount.setValue(amount);
        await this.selectFromAccount.selectByVisibleText(fromAccount);
        await this.btnPay.click();
    }

    async open() {
        await super.open('billpay');
        await this.inputPayeeName.waitForDisplayed();
    }
}

export default new PaymentPage();