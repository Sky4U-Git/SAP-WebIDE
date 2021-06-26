sap.ui.define([], function () {
	"use strict";
	return {
		readablePOStatus: function (poStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (poStatus) {
			case "CONF":
				return resourceBundle.getText("CONF");
			case "PEND":
				return resourceBundle.getText("PEND");
			case "OPEN":
				return resourceBundle.getText("OPEN");
			default:
				return poStatus;
			}
		}
	};
});