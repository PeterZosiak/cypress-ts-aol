import composerComponent from "../pages/components/composer.component"
import sidebarComponent, { MailboxFolders } from "../pages/components/sidebar.component"
import mailItem from "../pages/components/mailItem.component";

describe('Send AOL email', () => {
  before(() => {
    // Arrange
    cy.loginAol(Cypress.env("USER"), Cypress.env("PASSWORD"))
  });

  it('Should compose and send email to recipient and validate email have been send', () => {
    // Arrange
    const recipient = Cypress.env("RECIPIENT")
    const subject = 'Test subject'
    const attachment = 'cypress/fixtures/img.jpg'

    // Act
    // Compose an email with the given recipient, subject, and attachment.
    composerComponent.composeEmail(recipient, subject, attachment)
    cy.wait(10000) // Wait for the email to be sent

    // Assert
    sidebarComponent.navigateToFolder(MailboxFolders.SENT)
    const sentMail = new mailItem(0)
    sentMail.item().should('be.visible')
      .and('have.attr', 'aria-label').then((ariaLabel) => {
        expect(ariaLabel).to.include(recipient)
        expect(ariaLabel).to.include(subject)
      })
  })
})