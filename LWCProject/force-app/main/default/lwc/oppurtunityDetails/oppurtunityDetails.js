import { LightningElement, api } from 'lwc';

export default class OppurtunityDetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    constructor(){
        super();
        console.log('record Id ',this.recordId);
        console.log('Object Info ', this.objectApiName);
    } 
}