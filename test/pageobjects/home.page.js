const { $, expect } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  get iconCart() {
    return $('.shopping_cart_link')
  }

  async validateHomePage() {
    expect(browser).toHaveUrlContaining('/inventory.html')
    expect(this.iconCart).toBeDisplayed()
  }

  open() {
    return super.open('/inventory.html')
  }
}

module.exports = new HomePage();
