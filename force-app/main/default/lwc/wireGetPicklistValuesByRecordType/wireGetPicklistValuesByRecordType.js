import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class WireGetPicklistValuesByRecordType extends LightningElement {
  treeModel;
  error;

  @wire(getPicklistValuesByRecordType, {
    objectApiName: ACCOUNT_OBJECT,
    recordTypeId: '012000000000000AAA'
  })
  wiredValues({error,data}) {
    if (data) {
      console.log(data);
            console.log(data.picklistFieldValues);
      this.treeModel = this.buildTreeModel(data.picklistFieldValues);
      this.error = undefined;
    }
    else {
      this.treeModel = undefined;
      this.error = error;
    }
  }

  buildTreeModel(picklistValues) {
    const treeNodes = [];
    Object.keys(picklistValues).forEach(picklist => {
      treeNodes.push({
        label: picklist,
        items: picklistValues[picklist].values.map(item => ({
          label: item.label,
          name: item.value
        }))
      });
    });
    console.log(treeNodes);
    return treeNodes;
  }
}