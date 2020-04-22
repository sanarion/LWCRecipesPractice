import { LightningElement, api} from 'lwc';

export default class ContactListItemBubbling extends LightningElement {
  @api contact;

  handleSelect(event) {
    event.preventDefault();
    const selectEvent = new CustomEvent('contactselect', {
      bubbles:true
    });
    this.dispatchEvent(selectEvent);
  }
}