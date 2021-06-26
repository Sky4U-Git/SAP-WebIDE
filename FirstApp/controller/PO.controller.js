sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"../model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function (Controller, MessageToast, formatter, Filter, FilterOperator) {
		"use strict";
		return Controller.extend("search.PO.controller.App", {
			formatter: formatter,
			onInit: function () {},
			onSearchPO: function () {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				MessageToast.show(oBundle.getText("searchPO"));

				//Build filter Array
				var aFilter = [];
				let inputData = JSON.parse(this.getView().getModel().getJSON()).poInput;
				if (inputData.companycode) {
					aFilter.push(new Filter("Bukrs", FilterOperator.Contains, inputData.companycode));
				}
				if (inputData.plant) {
					aFilter.push(new Filter("Plant", FilterOperator.Contains, inputData.plant));
				}
				if (inputData.poNumber) {
					aFilter.push(new Filter("Ebeln", FilterOperator.Contains, inputData.poNumber));
				}
				if (inputData.poType) {
					aFilter.push(new Filter("poType", FilterOperator.Contains, inputData.poType));
				}

				//filter Binding
				var oList = this.byId("poList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			},
			handleSortPress: function () {
				var oList = this.byId("poList");
				var oBinding = oList.getBinding("items");
				var aSorter = [];
				aSorter.push(new sap.ui.model.Sorter("Bukrs", false, false));
				oBinding.sort(aSorter);
			},
			handleSortPress: function () {
				var oList = this.byId("poList");
				var oBinding = oList.getBinding("items");
				var aSorter = [];
				aSorter.push(new sap.ui.model.Sorter("Bukrs", false, true));
				oBinding.sort(aSorter);
			},
			showDetail: function (oEvent) {
				var oItem = oEvent.getSource();
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("podetail", {
					po: window.encodeURIComponent(oItem.getBindingContext("pos").getPath().substr(1))
				});
			}
		});
	});