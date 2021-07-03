sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("search.PO.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data Model on View
            var poInput = {
                poInput: {
                    poNumber: "",
                    poType: "",
                    plant: "",
                    companycode: ""
                }
            };
            var oModel = new JSONModel(poInput);
            this.setModel(oModel);
            this.getRouter().initialize();
            this.getRouter().attachBypassed(function (oEvent) {
                var sHash = oEvent.getParameter("hash");
                console.log("Hash " + sHash + " is invalid.");
            });
            this.getRouter().attachRouteMatched(function (oEvent) {
                var sRouteName = oEvent.getParameter("name");
                console.log("Route " + sRouteName + " is valid.");
            });
        }
    });
});