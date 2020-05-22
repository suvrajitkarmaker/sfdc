import { LightningElement, track } from 'lwc';

export default class CalculatorCmp extends LightningElement {
    
    number1;
    number2;
    @track result;

    handleChangeEvent(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'number1'){
            this.number1 = val;
        }else{
            this.number2 = val;
        }
        
    }

    doSum(){
        const sum = parseInt(this.number1) + parseInt(this.number2);
        this.result = sum;
    }

    doSubsc(){
        const subsc = parseInt(this.number1) - parseInt(this.number2);
        this.result = subsc;
    }

    doDiv(){
        const divOut = parseInt(this.number1) / parseInt(this.number2);
        this.result = divOut;
    }

    doMulti(){
        const multiPli = parseInt(this.number1) * parseInt(this.number2);
        this.result = multiPli;
    }
    
}