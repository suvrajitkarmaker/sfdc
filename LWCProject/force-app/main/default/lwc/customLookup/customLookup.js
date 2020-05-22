import { LightningElement, api, track } from 'lwc';
import findRecords from '@salesforce/apex/LookupControllerLWC.findRecords'
export default class CustomLookup extends LightningElement {

    @api objectApiName;
    @api fieldApiName;
    @api iconname;
    @track records;
    @track errors;
    @track selectedRecord;
    handleSearch(event){
        console.log(this.objectApiName);
        const searchValue=event.detail;
        findRecords({
            objectName:this.objectApiName,
            fieldApiName: this.fieldApiName,
            searchValue:searchValue
        })
        .then(result =>{
            console.log('Records are ',result);
            this.records=result;
            for(let i=0;i<this.records.length;i++){
                if(this.records[i]){
                    this.records[i].Name=this.records[i][this.fieldApiName];
                    console.log(this.records[i].Name);
                }
            }
            this.errors=undefined;
        })
        .catch(error =>{
            this.errors=error;
            this.records=undefined;
        })
    }
    handleSelect(event){
        const recordId = event.detail;
        const selectedRec=this.records.find(
            record => record.Id === recordId
        );
        console.log('Selected record ',selectedRec);
        this.selectedRecord=selectedRec;
    }
    handleRemove(){
        this.selectedRecord=undefined;
        this.errors=undefined;
        this.records=undefined;

    }
}