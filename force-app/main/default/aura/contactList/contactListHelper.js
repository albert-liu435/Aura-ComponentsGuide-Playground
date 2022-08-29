({
   loadContacts : function(cmp) {
        //调用controller的getContacts方法，没有传入参数
        // Load all contact data
        var action = cmp.get("c.getContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //设置返回的数据
                cmp.set("v.contacts", response.getReturnValue());
                cmp.set("v.contactList", response.getReturnValue());
                //更新数据
                this.updateTotal(cmp);
            }

            // Display toast message to indicate load status
            var toastEvent = $A.get("e.force:showToast");
            if (state === 'SUCCESS'){
                toastEvent.setParams({
                    "title": "Success!",
                    "message": " Your contacts have been loaded successfully."
                });
            }
            else {
                toastEvent.setParams({
                        "title": "Error!",
                        "message": " Something has gone wrong."
                });
            }
            toastEvent.fire();
        });
         $A.enqueueAction(action);
    },
     
    updateTotal: function(cmp) {
      var contacts = cmp.get("v.contacts");
      cmp.set("v.totalContacts", contacts.length);
    }
})