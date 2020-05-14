import { LightningElement } from 'lwc';
import trailheadLogo from '@salesforce/resourceUrl/trailhead_logo';
import trailheadCharacters from '@salesforce/resourceUrl/trailhead_characters';

export default class MiscStaticResource extends LightningElement {
  trailheadLogoUrl = trailheadLogo;
  einsteinUrl = trailheadCharacters + '/images/einstein.png';
}