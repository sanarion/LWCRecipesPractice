import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { refreshApex } from '@salesforce/apex';

export default class ApexWireMethodToFunction extends LightningElement {
  contacts;
  error;
  cacheContacts;

  @wire(getContactList)
  wiredContacts({error,data}) {
    if (data) {
      this.contacts = data;
      this.error = undefined;
    }
    else if (error) {
      this.error = error;
      this.contacts = undefined;
    }
  }

  handleClear() {
    this.cacheContacts = this.contacts;
    this.contacts = undefined;

  }

  handleGet() {
    this.contacts = this.cacheContacts;
    refreshApex(this.contacts);
  }
}