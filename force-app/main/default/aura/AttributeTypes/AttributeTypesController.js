({
    getString: function (component, event) {
        var action = component.get("c.getStringArray");
        //回调函数
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var stringItems = response.getReturnValue();
                component.set("v.favoriteColors", stringItems);
            }
        });
        //调用apex功能
        $A.enqueueAction(action);
    }
})