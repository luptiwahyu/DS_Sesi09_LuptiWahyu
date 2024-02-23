const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')

describe('Swag Labs', () => {
  it('should login with standard_user credentials', async () => {
    const username = process.env.USERNAME_STANDARD_USER
    await LoginPage.open()
    await LoginPage.login(username)
    await HomePage.validateHomePage()
  })

  it('should login with locked_out_user credentials', async () => {
    const username = process.env.USERNAME_LOCKED_OUT_USER
    await LoginPage.open()
    await LoginPage.login(username)
    await LoginPage.validateLockedOutUserError()
  })

  it('should login with performance_glitch_user credentials', async () => {
    const username = process.env.USERNAME_PERFORMANCE_GLITCH_USER
    await LoginPage.open()
    await LoginPage.login(username)
    await HomePage.validateHomePage()
  })
})
