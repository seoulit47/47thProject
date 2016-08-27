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
                this.set_name("HY_AddDonationForm");
                this.set_classname("HY_AddDonationForm");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,852,316);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDonationType", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"data\">정치자금 기부금</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">법정 기부금</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">우리사주조합 기부금</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">종교단체 지정 기부금</Col></Row><Row><Col id=\"data\">지정기부금(비종교단체)</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("dsHyDependentDonationCopy", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"empNo\" type=\"STRING\" size=\"256\"/><Column id=\"occGubun\" type=\"STRING\" size=\"256\"/><Column id=\"donationType\" type=\"STRING\" size=\"256\"/><Column id=\"donationDate\" type=\"STRING\" size=\"256\"/><Column id=\"donationCompanyName\" type=\"STRING\" size=\"256\"/><Column id=\"donationAmt\" type=\"STRING\" size=\"256\"/><Column id=\"regiNo\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Div("Div06", "absolute", "0%", "0", "840", "60", null, null, this);
            obj.set_taborder("0");
            obj.set_text("            기부금 내역 등록");
            obj.style.set_align("left middle");
            obj.style.set_background("transparent URL('img::titleBar7.jpg')");
            this.addChild(obj.name, obj);

            obj = new Grid("addDonationGrid", "absolute", "1.41%", "27.53%", null, "68.35%", "1.53%", null, this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell style=\"font:10 맑은고딕;\" text=\"이름\"/><Cell col=\"1\" style=\"font:10 맑은고딕;\" text=\"생년월일\"/><Cell col=\"2\" style=\"font:10 맑은고딕;\" text=\"발생구분\"/><Cell col=\"3\" style=\"font:10 맑은고딕;\" text=\"기부유형\"/><Cell col=\"4\" style=\"font:10 맑은고딕;\" text=\"기부일\"/><Cell col=\"5\" style=\"font:10 맑은고딕;\" text=\"지급법인명\"/><Cell col=\"6\" style=\"font:10 맑은고딕;\" text=\"금액\"/></Band><Band id=\"body\"><Cell edittype=\"text\" style=\"font:10 맑은고딕;\" text=\"bind:name\"/><Cell col=\"1\" edittype=\"text\" style=\"font:10 맑은고딕;\" text=\"bind:regiNo\"/><Cell col=\"2\" edittype=\"text\" style=\"font:10 맑은고딕;\" text=\"bind:occGubun\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" style=\"font:10 맑은고딕;\" text=\"bind:donationType\" combodataset=\"dsDonationType\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"date\" style=\"font:10 맑은고딕;\" text=\"bind:donationDate\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" style=\"font:10 맑은고딕;\" text=\"bind:donationCompanyName\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"masknumber\" style=\"font:10 맑은고딕;\" text=\"bind:donationAmt\"/></Band></Format></Formats>");
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
            		p.set_classname("HY_AddDonationForm");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.addIncludeScript("HY_AddDonationForm.xfdl", "scripts::commonScripts.xjs");
        this.registerScript("HY_AddDonationForm.xfdl", function() {
        /********************************************************************************
        *                                                                               *
        * 공통 스트립트관리                                                          	*
        *                                                                               *
        * @Path		    hrs-HY_addDonationForm                  	                    *
        * @Description 	기부금  내역등록       									    *
        * @Author	    황태경					                                		*
        * 									                                            *
        * Created on 2016. 2. 29.                             		                    *
        *									                                            *
        ********************************************************************************/
        //include "scripts::commonScripts.xjs";

        var empNo;
        this.HY_AddDonationForm_onload = function(obj,e)
        {
        	this.addDonationGrid.set_binddataset(this.parent.dsHyDependentDonation);
        	this.dsHyDependentDonationCopy.copyData(this.parent.dsHyDependentDonation);
        	empNo = this.parent.empNo;
        }

        this.addBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentDonation.addRow();
        	var lastRow = this.parent.dsHyDependentDonation.rowcount-1;
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "empNo", empNo);
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "donationAmt", 0);
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "name", "");
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "donationCompanyName", "");
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "regiNo", "");
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "occGubun", 1);
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "donationType", 0);
        	this.parent.dsHyDependentDonation.setColumn(lastRow, "donationDate", "");
        }

        this.delBtn_onclick = function(obj,e)
        {
        	var currentRow = this.addDonationGrid.currentrow;
        	this.parent.dsHyDependentDonation.deleteRow(currentRow);
        }

        this.saveBtn_onclick = function(obj,e)
        {
        	this.gfnClearInvalidData(this.parent.dsHyDependentDonation, 0);
        	this.parent.dsHyDeductionData.setColumn(0, "campaigningDonationDdt", this.parent.dsHyDependentDonation.getCaseSum("donationType==1","donationAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "legalDonationDdt", this.parent.dsHyDependentDonation.getCaseSum("donationType==2","donationAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "empShareDonationDdt", this.parent.dsHyDependentDonation.getCaseSum("donationType==3","donationAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "desDonationReligionDdt", this.parent.dsHyDependentDonation.getCaseSum("donationType==4","donationAmt",0,-1));
        	this.parent.dsHyDeductionData.setColumn(0, "desDonationDdt", this.parent.dsHyDependentDonation.getCaseSum("donationType==5","donationAmt",0,-1));
        	this.close();
        }

        this.cancelBtn_onclick = function(obj,e)
        {
        	this.parent.dsHyDependentDonation.copyData(this.dsHyDependentDonationCopy);
        	this.close();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.HY_AddDonationForm_onload, this);
            this.addBtn.addEventHandler("onclick", this.addBtn_onclick, this);
            this.delBtn.addEventHandler("onclick", this.delBtn_onclick, this);
            this.saveBtn.addEventHandler("onclick", this.saveBtn_onclick, this);
            this.cancelBtn.addEventHandler("onclick", this.cancelBtn_onclick, this);

        };

        this.loadIncludeScript("HY_AddDonationForm.xfdl");

       
    };
}
)();
