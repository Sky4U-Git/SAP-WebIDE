sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		"use strict";
		return Controller.extend("search.PO.controller.App", {
			onInit: function () {},
			onSearchPO: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				MessageToast.show(oBundle.getText("searchPO"));
			}
		});
	});