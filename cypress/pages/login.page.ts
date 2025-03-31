export default new class LoginPage {
  nameInput = () => cy.get('[id="login-username"]')
  passwordInput = () => cy.get('[id="login-passwd"]')

  loginButton = () => cy.get('[id="login-signin"]')

  /**
   * Logs in to the AOL web application with the given username and password.
   *
   * @param {string} username - The username for login.
   * @param {string} password - The password for login.
   */
  login(username: string, password: string) {
    this.nameInput().type(username)
    this.loginButton().click()
    this.passwordInput().type(password)
    this.loginButton().click()
  }
}