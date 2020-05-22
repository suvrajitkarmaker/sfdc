public with sharing class LookupControllerLWC {
    public LookupControllerLWC() {

    }
    @AuraEnabled
    public static List<sObject> findRecords(String objectName,String fieldApiName, String searchValue){
        String key ='%'+searchValue+'%';
        String Query = 'Select Id, '+fieldApiName+' FROM '+objectName+' Where '+fieldApiName+ ' LIKE : key';
        List<sObject>sObjectList=Database.Query(Query);
        return sObjectList;
    }
}
