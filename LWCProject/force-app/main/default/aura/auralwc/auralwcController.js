({
    doHandle : function(component, event, helper) {
        const messsage = event.getParam('message');
        console.log('message from lwc', messsage);
    },
    callChild: function(component, event, helper) {
        var chilComp =component.find('childCmp');
        chilComp.childMethod('aura message',541);
    }
})
