import { LightningElement, track } from 'lwc';
// import {si} from './shared.js'
import {si} from 'c/utility'
export default class Sharedmisc extends LightningElement {
    @track p;
    @track t;
    @track r;
    handleChangeEvent(event){
        const val = event.target.value;
        const name = event.target.name;
        if(name === 'number1'){
            this.p = val;
        }else if(name==='number2'){
            this.t=val;
        }
        else {
            this.r = val;
        }
        
    }
    // constructor(){
    //     super();
    //     const s=si(100,1,10);
    //     console.log('simple interest is ',s);
    // }
    calculateSi(){
        const s=si(this.p,this.t,this.r);
        console.log('simple interest is ',s); 
    }
}