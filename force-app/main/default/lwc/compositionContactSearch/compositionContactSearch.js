import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';

const DELAY = 350;

export default class CompositionContactSearch extends LightningElement {
  contacts;
  error;

  handleKeyChange(event) {
    window.clearTimeout(this.delayTimeout);
    const searchKey = event.target.value;
    this.delayTimeout = setTimeout(() => {
      findContacts({searchKey})
        .then(result => {
          this.contacts = result;
          this.error = undefined;
        })
        .catch(error => {
          this.contacts = undefined;
          this.error = error;
        });
    },DELAY);
  }
}