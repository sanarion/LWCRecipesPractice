import { LightningElement,api } from 'lwc';

export default class RecordViewFormDynamicContact extends LightningElement {
  @api recordId;
  @api objectApiName;
}