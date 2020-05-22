import { LightningElement } from 'lwc';

export default class GrandChild extends LightningElement {
    handleSimpleEvent(event){
        console.log('grand child')
        // console.log(event.target.message);
        // console.log(event.target.pagno);
    }
}