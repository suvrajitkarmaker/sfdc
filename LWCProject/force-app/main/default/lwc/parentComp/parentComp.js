import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleSimpleEvent(event){
        console.log(event.target.message);
        console.log(event.target.pagno);


    }
    handleClick(){
        this.template.querySelector('c-chil-comp').childMethod('paremeter experminet', 54545);
    }
}