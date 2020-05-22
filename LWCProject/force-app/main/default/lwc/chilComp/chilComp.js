import { LightningElement, api, track } from 'lwc';

export default class ChilComp extends LightningElement {
    @api message;
    @api pagno;
    @api contact;
    @track date = new Date();
    @api
    childMethod(messageParam,pagnoParam){
        this.date= new Date();
        this.message=messageParam;
        this.pagno=pagnoParam;
    }
    handleEvent(){
        const eventS= new CustomEvent(
            'simple',
            {
                bubbles:true,
                composed:false
            }
        );
        this.dispatchEvent(eventS);
    }
}