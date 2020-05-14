import { LightningElement } from 'lwc';

export default class MiscDomQuery extends LightningElement {
  selection;

  handleCheckboxChange() {
    console.log(this.template.querySelectorAll('lightning-input'));
    const checked = Array.from(
      this.template.querySelectorAll('lightning-input')
    )
      .filter(element => element.checked)
      .map(element => element.label);
    this.selection = checked.join(', ');
  }
}