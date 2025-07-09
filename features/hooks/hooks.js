import { After } from '@wdio/cucumber-framework';

After(async () => {
    const logoutLink = await $("//a[normalize-space()='Log Out']");
    if (await logoutLink.waitForExist({ timeout: 2000, reverse: false }).catch(() => false)) {
        await logoutLink.click();
        await browser.pause(2000); // Aumentar el tiempo de espera
        // Verificar que efectivamente se hizo logout
        await browser.waitUntil(async () => {
            const loginButton = await $("//input[@value='Log In']");
            return await loginButton.isDisplayed();
        }, { timeout: 5000 });
    }
});