ko.validation.init({  
  
    registerExtenders: true,  
    messagesOnModified: true,  
    insertMessages: true,  
    parseInputAttributes: true,  
    errorClass: 'errorStyle',  
    messageTemplate: null  

}, true);  

var StudentViewModel=function()
{
    var self=this;
    self.firstName=ko.observable().extend({required:{message:"Please Enter First Name"}});
    self.lastName=ko.observable().extend({required:{message:"Please Enter Last Name"}});
    self.email=ko.observable().extend({required:{message:"Please Enter Email"}});
    self.genderList=["Male","Female","Other"];
    self.gender=ko.observable().extend({required:{message:"Please Select Gender"}});
    self.course=ko.observable([]).extend({required:{message:"Please Select Course"}});
    self.Submit=function(){
        var errors=ko.validation.group(self);
        console.log(errors().length);
        if(errors().length===0)
        {
            var jsonData = ko.toJSON(self);
            console.log(jsonData);
            alert("Form sumitted successfully");
            return true;
        }
        else{
        errors.showAllMessages();
        return 0;
        }
        }
    }


ko.applyBindings(new StudentViewModel());