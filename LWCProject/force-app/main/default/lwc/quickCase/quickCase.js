import { LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {
    subject;
    description;
    statusValue;
    priortyValue;
    originValue;
    handleChange(event){
        let name=event.target.name;
        let val=event.target.value;
        if(name==='subject'){
            this.subject=val;
        }else if(name==='description'){
            this.description=val;
        }
        else if(name==='CaseStatus'){
            this.statusValue=val;
        }
        else if(name==='CasePriorty'){
            this.priortyValue=val;
        }
        else if(name==='CaseOrigin'){
            this.originValue=val;
        }
    }
    get status(){
        return [
            {label:'new',value:'New'},
            {label:'closed',value:'Closed'}
        ];
    }
    get origin(){
        return [
            {label:'web',value:'web'},
            {label:'Phone',value:'Phone'},
            {label:'Email',value:'Email'}
        ];
    }
    get priorty(){
        return [
            {label:'High',value:'High'},
            {label:'Low',value:'Low'},
            {label:'Medium',value:'Medium'}
        ];
    }
    handleCreate(){

    }
}