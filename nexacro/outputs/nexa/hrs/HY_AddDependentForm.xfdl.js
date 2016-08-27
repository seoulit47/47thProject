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
                this.set_name("HY_AddDependentForm");
                this.set_classname("HY_AddDependentForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,762,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRelationType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">배우자</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">직계존속</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">직계비속</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">형제자매</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">위탁아동</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">수급자</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "759", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            부양가족 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("addDependentGrid", "absolute", "1.84%", "27.85%", null, "68.35%", "1.05%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"이름\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"생년월일\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"관계구분\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"경로우대공제\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"장애인공제\"/><Cell col=\"5\" style=\"font:10 맑은고딕;\" text=\"부녀자공제\"/><Cell col=\"6\" style=\"font:10 맑은고딕;\" text=\"한부모공제\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:regiNo\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:relationGubun\" combodataset=\"dsRelationType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"3\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:senior70yearoverDdt\" expr=\"expr:senior70yearoverDdt!=1? 0 : 1\"/><Cell col=\"4\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:handicappedPersonDdt\"/><Cell col=\"5\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:womenDdt\"/><Cell col=\"6\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:singleParentDdt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("addBtn", "absolute", "57.74%", "56", null, "27", "32.55%", null, this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("delBtn", "absolute", "68.37%", "56", null, "27", "21.92%", null, this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("saveBtn", "absolute", "79%", "56", null, "27", "11.29%", null, this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Button("cancelBtn", "absolute", "89.63%", "56", null, "27", "1.05%", null, this);
            obj.set_taborder("5");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 762, 316, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("HY_AddDependentForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_AddDependentForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_AddDependentForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_addDependentForm                     	                *
        * @Description 	부양가족등록 									   	            *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 29.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;
        var belongYear;
        this.cancelBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependent.copyData(this.dsHyDependentCopy);
        	this.close();
        }

        this.HY_AddDependentForm_onload = function(obj,e)
        {
        	empNo = this.parent.empNo;
        	belongYear = this.parent.belongYear;
        	this.addDependentGrid.set_binddataset(this.parent.dsHyDependent);
        	this.dsHyDependentCopy.copyData(this.parent.dsHyDependent);
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependent.addRow();
        	var lastRow = this.parent.dsHyDependent.rowcount-1;
        	
        	
        	this.parent.dsHyDependent.setColumn(lastRow, "empNo", empNo);
        	this.parent.dsHyDependent.setColumn(lastRow, "belongYear", belongYear);
        	this.parent.dsHyDependent.setColumn(lastRow, "pensionerDdt", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "foChdDdt", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "regiNo", "");
        	this.parent.dsHyDependent.setColumn(lastRow, "basicDdt", 1);
        	this.parent.dsHyDependent.setColumn(lastRow, "relationGubun", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "singleParentDdt", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "senior70yearoverDdt", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "handicappedPersonDdt", 0);
        	this.parent.dsHyDependent.setColumn(lastRow, "womenDdt", 0);
        }

        this.delBtn_onclick = function(obj,e)
        {
        	var currentRow = this.addDependentGrid.currentrow;
        	this.parent.dsHyDependent.deleteRow(currentRow);
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	
        	this.gfnClearInvalidData(this.parent.dsHyDependent, 0);
        	
        	this.parent.dsHyDeductionData.setColumn(0, "spouseDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==1"));
        	this.parent.dsHyDeductionData.setColumn(0, "linAscDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==2"));
        	this.parent.dsHyDeductionData.setColumn(0, "linDescChdDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==3"));
        	this.parent.dsHyDeductionData.setColumn(0, "sibilingDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==4"));
        	this.parent.dsHyDeductionData.setColumn(0, "pensionerDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==5"));
        	this.parent.dsHyDeductionData.setColumn(0, "foChdDdt", this.parent.dsHyDependent.getCaseCount("relationGubun==6"));
        	
        	this.parent.dsHyDeductionData.setColumn(0, "senior70yearoverDdt", this.parent.dsHyDependent.getCaseCount("senior70yearoverDdt==1"));
        	this.parent.dsHyDeductionData.setColumn(0, "handicappedPersonDdt", this.parent.dsHyDependent.getCaseCount("handicappedPersonDdt==1"));
        	this.parent.dsHyDeductionData.setColumn(0, "womanDdt", this.parent.dsHyDependent.getCaseCount("womenDdt==1"));
        	this.parent.dsHyDeductionData.setColumn(0, "singleParentDdt", this.parent.dsHyDependent.getCaseCount("singleParentDdt==1"));
        	
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_AddDependentForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("HY_AddDependentForm.xfdl");

       
    };
}
)();
