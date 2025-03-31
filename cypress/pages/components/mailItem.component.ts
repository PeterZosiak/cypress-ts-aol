export default class MailItemComponent {
  index: number;

  constructor(index: number = 0) {
    this.index = index;
  }

  item = () => cy.get('[data-test-id="message-list-item"]').eq(this.index);
}