(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("HY_AddInsuranceForm");
                this.set_classname("HY_AddInsuranceForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,852,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHyDependentInsuranceCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"insuranceName\" type=\"STRING\" size=\"256\"/><Column id=\"guaranteedInsuranceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"handicappedInsuranceAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "840", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            보험 내역 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("addInsuranceGrid", "absolute", "1.41%", "30.06%", null, "68.35%", "1.41%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"이름\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"생년월일\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"발생구분\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"보험기관명\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"보장성보험료\"/><Cell col=\"5\" style=\"font:10 맑은고딕;\" text=\"장애인보장성보험료\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:regiNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:occGubun\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:insuranceName\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:guaranteedInsuranceAmt\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:handicappedInsuranceAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "57.75%", "56", null, "27", "32.51%", null, this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "68.43%", "56", null, "27", "21.95%", null, this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "78.99%", "56", null, "27", "11.27%", null, this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "89.67%", "56", null, "27", "1.06%", null, this);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 852, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_AddInsuranceForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_AddInsuranceForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_AddInsuranceForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_addInsuranceForm                  	                    *
        * @Description 	보험료내역등록 									   	        *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 29.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;

        
        this.HY_AddInsuranceForm_onload = function(obj,e)
        {
        	this.addInsuranceGrid.set_binddataset(this.parent.dsHyDependentInsurance);
        	this.dsHyDependentInsuranceCopy.copyData(this.parent.dsHyDependentInsurance);
        	empNo = this.parent.empNo;
        	
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentInsurance.addRow();
        	var lastRow = this.parent.dsHyDependentInsurance.rowcount-1;
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "regiNo", "");
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "occGubun", "");
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "empNo", empNo);
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "insuranceName", "");
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "occGubun", 1);
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "guaranteedInsuranceAmt", 0);
        	this.parent.dsHyDependentInsurance.setColumn(lastRow, "handicappedInsuranceAmt", 0);
        }

        this.delBtn_onclick = function(obj,e)
        {
        	var currentRow = this.addInsuranceGrid.currentrow;
        	this.parent.dsHyDependentInsurance.deleteRow(currentRow);
        	
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentInsurance.copyData(this.dsHyDependentInsuranceCopy);
        	this.close();
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnClearInvalidData(this.parent.dsHyDependentInsurance, 0);
        	this.parent.dsHyDeductionData.setColumn(0, "guaranteedInsuranceDdt", this.parent.dsHyDependentInsurance.getSum("guaranteedInsuranceAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "guaranteedHandicappedDdt", this.parent.dsHyDependentInsurance.getSum("handicappedInsuranceAmt",0,-1));
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_AddInsuranceForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("HY_AddInsuranceForm.xfdl");

       
    };
}
)();
