import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
  @api percentage;

  get style() {

    return !!this.percentage ? `width: ${this.percentage}%` : 'width: 0%';
  }
}