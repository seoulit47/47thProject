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
                this.set_name("HY_AddMedicalForm");
                this.set_classname("HY_AddMedicalForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,852,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMedicalType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">근로자 본인</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">65세 이상 부양가족</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">장애인</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">난임시술비</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">그 외 부양비</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentMedicalCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"medicalProofCode\" type=\"STRING\" size=\"256\"/><Column id=\"medicalCompanyName\" type=\"STRING\" size=\"256\"/><Column id=\"medicalGubun\" type=\"STRING\" size=\"256\"/><Column id=\"medicalAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "-0.12%", "0", "840", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            의료비 내역 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("addMedicalGrid", "absolute", "1.41%", "27.53%", null, "68.35%", "1.53%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"이름\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"생년월일\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"발생구분\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"의료증빙\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"지급법인명\"/><Cell col=\"5\" style=\"font:10 맑은고딕;\" text=\"의료비구분\"/><Cell col=\"6\" style=\"font:10 맑은고딕;\" text=\"금액\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:regiNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:occGubun\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" text=\"bind:medicalProofCode\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" text=\"bind:medicalCompanyName\"/><Cell col=\"5\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:medicalGubun\" combodataset=\"dsMedicalType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:medicalAmt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "57.75%", "56", null, "27", "32.51%", null, this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "68.19%", "56", null, "27", "22.18%", null, this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "78.52%", "56", null, "27", "11.74%", null, this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "88.97%", "56", null, "27", "1.76%", null, this);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 852, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_AddMedicalForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_AddMedicalForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_AddMedicalForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_addMedicalForm                  	                    *
        * @Description 	의료비 내역등록       									    *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 29.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;
        this.addBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentMedical.addRow();
        	var lastRow = this.parent.dsHyDependentMedical.rowcount-1;
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "empNo", empNo);
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "medicalAmt",0);
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "occGubun",1);	
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "name","");
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "medicalProofCode","");
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "regiNo","");
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "medicalGubun",0);
        	this.parent.dsHyDependentMedical.setColumn(lastRow, "medicalCompanyName","");
        }

        this.delBtn_onclick = function(obj,e)
        {
        	var currentRow = this.addMedicalGrid.currentrow;
        	this.parent.dsHyDependentMedical.deleteRow(currentRow);
        	
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnClearInvalidData(this.parent.dsHyDependentMedical, 0);
        	this.parent.dsHyDeductionData.setColumn(0, "medicalOwnCostDdt", this.parent.dsHyDependentMedical.getCaseSum("medicalGubun==1","medicalAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "medical65overCostDdt", this.parent.dsHyDependentMedical.getCaseSum("medicalGubun==2","medicalAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "medicalHandicappedCostDdt", this.parent.dsHyDependentMedical.getCaseSum("medicalGubun==3","medicalAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "medicalInfertilityCostDdt", this.parent.dsHyDependentMedical.getCaseSum("medicalGubun==4","medicalAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "medicalBasicCostDdt", this.parent.dsHyDependentMedical.getCaseSum("medicalGubun==5","medicalAmt",0,-1));
        	
        	
        	this.close();
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentMedical.copyData(this.dsHyDependentMedicalCopy);
        	this.close();
        }

        this.HY_AddMedicalForm_onload = function(obj,e)
        {
        	this.addMedicalGrid.set_binddataset(this.parent.dsHyDependentMedical);
        	this.dsHyDependentMedicalCopy.copyData(this.parent.dsHyDependentMedical);
        	empNo = this.parent.empNo;
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_AddMedicalForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("HY_AddMedicalForm.xfdl");

       
    };
}
)();
