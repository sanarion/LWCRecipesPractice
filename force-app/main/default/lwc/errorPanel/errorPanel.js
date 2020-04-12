import { LightningElement, api } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';

export default class ErrorPanel extends LightningElement {
  @api friendlyMessage = 'Error retrieving data';

  viewDetails = false;

  @api errors;

  get errorMessages() {
    return reduceErrors(this.errors);
  }

  handleCheckboxChange(event) {
    this.viewDetails = event.target.checked;
  }
}