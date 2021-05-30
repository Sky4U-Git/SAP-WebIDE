sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function (Controller, MessageToast) {
		"use strict";
		return Controller.extend("search.PO.controller.App", {
			onSearchPO: function () {
				MessageToast.show("Searching PO's");
			}
		});
	});