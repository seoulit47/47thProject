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
                this.set_name("HY_AddEducationForm");
                this.set_classname("HY_AddEducationForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,852,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEducationType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">근로자 본인</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">초중고생</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">대학생</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">장애인</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentEducationCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"eduGubun\" type=\"STRING\" size=\"256\"/><Column id=\"eduAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "840", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            교육비 내역 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("addEducationGrid", "absolute", "1.41%", "27.53%", null, "68.35%", "1.53%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"이름\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"생년월일\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"발생구분\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"교육비구분\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"교육비\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:regiNo\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:occGubun\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:eduGubun\" combodataset=\"dsEducationType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:eduAmt\"/></Band></Format></Formats>");
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
            		p.set_classname("HY_AddEducationForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_AddEducationForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_AddEducationForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_addEducationForm                  	                    *
        * @Description 	교육비  내역등록       									    *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 29.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;
        this.HY_AddEducationForm_onload = function(obj,e)
        {
        	this.addEducationGrid.set_binddataset(this.parent.dsHyDependentEducation);
        	this.dsHyDependentEducationCopy.copyData(this.parent.dsHyDependentEducation);
        	empNo = this.parent.empNo;
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentEducation.addRow();
        	var lastRow = this.parent.dsHyDependentEducation.rowcount-1;
        	this.parent.dsHyDependentEducation.setColumn(lastRow, "empNo", empNo);
        	this.parent.dsHyDependentEducation.setColumn(lastRow, "eduAmt", 0);
        	this.parent.dsHyDependentEducation.setColumn(lastRow, "occGubun", 1);
        	this.parent.dsHyDependentEducation.setColumn(lastRow, "regiNo", "");
        	this.parent.dsHyDependentEducation.setColumn(lastRow, "eduGubun", 0);
        }

        this.delBtn_onclick = function(obj,e)
        {
        	var currentRow = this.addEducationGrid.currentrow;
        	this.parent.dsHyDependentEducation.deleteRow(currentRow);
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnClearInvalidData(this.parent.dsHyDependentEducation, 0);
        	
        	this.parent.dsHyDeductionData.setColumn(0, "eduOwnCostDdt", this.parent.dsHyDependentEducation.getCaseSum("eduGubun==1","eduAmt",0,-1));
        	
        	this.parent.dsHyDeductionData.setColumn(0, "eduUnder20CostDdt", this.parent.dsHyDependentEducation.getCaseSum("eduGubun==2","eduAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "eduUnder20Cnt", this.parent.dsHyDependentEducation.getCaseCount("eduGubun==2"));
        	
        	this.parent.dsHyDeductionData.setColumn(0, "eduOver20CostDdt", this.parent.dsHyDependentEducation.getCaseSum("eduGubun==3","eduAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "eduOver20Cnt", this.parent.dsHyDependentEducation.getCaseCount("eduGubun==3"));
        	
        	this.parent.dsHyDeductionData.setColumn(0, "eduHandicappedCostDdt", this.parent.dsHyDependentEducation.getCaseSum("eduGubun==4","eduAmt",0,-1));
        	this.close();
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentEducation.copyData(this.dsHyDependentEducationCopy);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_AddEducationForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("HY_AddEducationForm.xfdl");

       
    };
}
)();
