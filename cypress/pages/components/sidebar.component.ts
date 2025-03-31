/**
 * Represents the sidebar component in the Outlook web application.
 * It provides methods to interact with the sidebar elements such as compose button, navigation, and mailbox folders.
 */
export default new class SidebarComponent {

  composeButton = () => cy.get('[data-test-id="compose-button"]')
  navigation = () => cy.get('[data-test-id="navigation"]')

  inboxFolderButton = () => cy.get('[data-test-folder-name="Inbox"]')
  unreadFolderButton = () => cy.get('[data-test-smartview-type="UNREAD"]')
  sentFolderButton = () => cy.get('[data-test-folder-name="Sent"]')

  /**
   * Clicks the compose button to open the email composer.
   */
  composeEmail() {
    this.composeButton().click()
  }

  /**
   * Navigate to the specified mailbox folder
   * @param folder - The folder to navigate to
   */
  navigateToFolder(folder: MailboxFolders) {
    switch (folder) {
      case MailboxFolders.SENT:
        this.sentFolderButton().click()
        break
      case MailboxFolders.INBOX:
        this.inboxFolderButton().click()
        break
      case MailboxFolders.UNREAD:
        this.unreadFolderButton().click()
        break

      //TODO: Add other folders
      default:
        throw new Error(`Unknown folder: ${folder}`)
    }
  }
}

export enum MailboxFolders {
  SENT = 'Sent',
  DRAFTS = 'Drafts',
  INBOX = 'Inbox',
  SPAM = 'Spam',
  TRASH = 'Trash',
  UNREAD = 'Unread',
}