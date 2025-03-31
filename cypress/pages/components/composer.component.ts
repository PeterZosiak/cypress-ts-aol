import sidebarComponent from "./sidebar.component"

export default new class ComposerComponent {
  // This is the main wrapper for the compose email component
  wrapper = () => cy.get('[data-test-id="compose-styler"]')

  // Input fields
  toInput = () => this.wrapper().find('[id="message-to-field"]', { timeout: 15000 })
  subjectInput = () => this.wrapper().find('[id="compose-subject-input"]')
  insertImageInput = () => this.wrapper().find('[data-test-id="icon-btn-insert-picture"]').next('input')

  // Action button
  sendButton = () => this.wrapper().find('[data-test-id="compose-send-button"]')

  /**
 * Composes an email with the given recipient, subject, and attachment.
 *
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} attachment - The path to the attachment file in Cypress folder
 */
  composeEmail(to: string, subject: string, attachment: string) {
    sidebarComponent.composeButton().click()

    this.toInput().type(to)
    this.subjectInput().type(subject)
    this.insertImageInput().selectFile(attachment, { force: true })

    this.sendButton().click()
  }
}