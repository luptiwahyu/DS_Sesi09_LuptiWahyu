const { $, expect } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get buttonLogin () {
        return $('#login-button');
    }

    get errorLockedOutUser() {
        return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username) {
        const password = process.env.PASSWORD

        await this.fieldUsername.waitForDisplayed({ timeout: 2500 })
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError() {
        await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 })
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
