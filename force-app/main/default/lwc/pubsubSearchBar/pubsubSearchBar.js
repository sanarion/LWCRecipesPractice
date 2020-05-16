import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class PubsubSearchBar extends LightningElement {
  @wire(CurrentPageReference) pageRef;

  handleKeyChange(event) {
    console.log('OK');
    fireEvent(this.pageRef, 'searchKeyChange',event.target.value);
    console.log('OK2');
  }
}